import { render } from "@testing-library/svelte";
import Navbar from "../navbar.svelte";


describe("Navbar component", () => {
  
  test('anchor tag Home should have attribute href = /', () => {
    const { getByText } = render(Navbar);
    expect(getByText('Home').closest('a')).toHaveAttribute('href', '/')
  })
  
  test('anchor tag My Pokemon List should have attribute href = /my-pokes', () => {
    const { getByText } = render(Navbar);
    expect(getByText('My Pokemon List').closest('a')).toHaveAttribute('href', '/my-pokes')
  })

  test("should render navbar first time with total catch 0 correctly", () => {
    const { getByText } = render(Navbar);
    expect(getByText('Pokemon have been caught: 0')).toBeInTheDocument()
  });

  test("should render navbar first time with total catch 0 on mobile correctly", () => {
    const { getByText } = render(Navbar);

    const getByTextWithMarkup = (text) => {
      getByText((content, node) => {
        const hasText = (node) => node.textContent === text
        const childrenDontHaveText = Array.from(node.children).every(
          child => !hasText(child)
        )
        return hasText(node) && childrenDontHaveText
      })
    }
    getByTextWithMarkup('My Pokemon List(total: 0)')
  });
});