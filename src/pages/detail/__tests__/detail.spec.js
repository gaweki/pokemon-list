import { render, waitFor, screen, fireEvent } from "@testing-library/svelte";
import Detail from "../detail.svelte";

import { getFiftyPercentPossiblity } from "../../../helpers";

describe("Detail rendering testing", () => {

  test(`Should load detail`, async () => {
    
    let { getByText } = render(Detail, {
      props: {
        name: "bulbasaur"
      }
    })
    expect(getByText(/catch.*bulbasaur/i)).toBeInTheDocument()
    expect(getByText(/types/i)).toBeInTheDocument()
    expect(getByText(/moves/i)).toBeInTheDocument()
    await waitFor(() => screen.getByText(/razor-wind/i))
    expect(getByText(/string-shot/i)).toBeInTheDocument()
    expect(getByText(/skull-bash/i)).toBeInTheDocument()
    
  })
});

describe("Detail action testing", () => {

  test(`Can press button catch, show modal, and save new poke`, async () => {
    const leftClick = { button: 0 };
    let { getByText } = render(Detail, {
      props: {
        name: "bulbasaur"
      }
    })

    await waitFor(() => screen.getByText(/razor-wind/i))

    const btnCatch = screen.getByText(/catch.*bulbasaur/i);
    await fireEvent.click(btnCatch, leftClick);
    if (getFiftyPercentPossiblity()) {
      await waitFor(() => screen.getByText(/submit.*save/i))
      const submitInput = screen.getByLabelText('nickname-input')
      await fireEvent.change(submitInput, { target: { value: 'woowwwww' } })
      const submitBtn = screen.getByLabelText('submit-button')
      await fireEvent.click(submitBtn, leftClick);
      expect(getByText(/success!/i)).toBeInTheDocument()
    } else {
      await waitFor(() => expect(getByText(/retry/i)).toBeInTheDocument()) 
    }
  })
});