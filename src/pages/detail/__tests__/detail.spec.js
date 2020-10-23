import { render, waitFor } from "@testing-library/svelte";
import Detail from "../detail.svelte";

describe("Detail page", () => {

  test(`Should load detail (without fetch)`, async () => {
    
    let { getByText } = render(Detail, {
      props: {
        name: "bulbasaur"
      }
    })
    expect(getByText(/catch.*bulbasaur/i)).toBeInTheDocument()
    expect(getByText(/types/i)).toBeInTheDocument()
    expect(getByText(/moves/i)).toBeInTheDocument()
    await waitFor(() => expect(getByText(/razor-wind/i)).toBeInTheDocument())
    
  })
});