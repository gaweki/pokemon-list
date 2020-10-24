import { render, waitFor, screen, fireEvent } from "@testing-library/svelte";
import Detail from "../detail.svelte";

import { getFiftyPercentPossiblity } from "../../../helpers";

beforeEach(() => {
  jest.spyOn(Math, 'random').mockReturnValue(0.9);
});

describe("Detail rendering testing", () => {

  test(`Should load detail`, async () => {
    
    let { getByText } = render(Detail, {
      props: {
        name: "caterpie"
      }
    })
    expect(getByText(/catch.*caterpie/i)).toBeInTheDocument()
    expect(getByText(/types/i)).toBeInTheDocument()
    expect(getByText(/moves/i)).toBeInTheDocument()
    await waitFor(() => screen.getByText(/tackle/i), { timeout: 5000 })
    expect(getByText(/snore/i)).toBeInTheDocument()
    expect(getByText(/electroweb/i)).toBeInTheDocument()
    
  })
});

describe("Detail action testing", () => {

  test(`Can press button catch, show modal, and save new poke`, async () => {
    const leftClick = { button: 0 };
    let { getByText } = render(Detail, {
      props: {
        name: "caterpie"
      }
    })

    await waitFor(() => screen.getByText(/tackle/i), { timeout: 5000 })

    const btnCatch = screen.getByText(/catch.*caterpie/i);
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