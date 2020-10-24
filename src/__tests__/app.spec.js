
import { fireEvent, render, screen, waitFor } from "@testing-library/svelte";
import App from "../App.svelte";


describe("Item component", () => {
  
  test('page can mock change to page detail', async () => {
    const { rerender } = render(App)
    await waitFor(() => screen.getByText(/all.*pokemon/i))
    await waitFor(() => screen.getByText(/caterpie/i), { timeout: 5000 })
  
    const leftClick = { button: 0 }
    fireEvent.click(screen.getByText(/caterpie/i), leftClick)

    rerender(App, {
      props: {
        url : "/detail/caterpie"
      }
    })
  
    expect(screen.getByText(/detail.*caterpie/i)).toBeInTheDocument()
  })
  
});