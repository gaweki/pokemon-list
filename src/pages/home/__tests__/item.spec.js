import { render } from "@testing-library/svelte";
import Item from "../components/pokemon-item.svelte";


describe("Item component", () => {
  
  test("should render li correctly", () => {
    const { container } = render(Item, {
      props: {
        name: "pikachu"
      }
    });

    expect(container).toContainHTML('<body><div><li><a href="/detail/pikachu"><span class="text-name">pikachu</span></a></li></div></body>');
    
  });

  test('shows proper item name when rendered', () => {
    const { getByText } = render(Item, { name: 'pikachu' })
  
    expect(getByText('pikachu')).toBeInTheDocument()
  })
  
  test('anchor tag should have attribute href = /detail/pikachu', () => {
    const { getByText } = render(Item, {
      props: {
        name: "pikachu"
      }
    });
    expect(getByText('pikachu').closest('a')).toHaveAttribute('href', '/detail/pikachu')
  })
});