import { render } from "@testing-library/svelte";
import Item from "../item.svelte";


describe("Item component", () => {
  
  test("should render li correctly", () => {
    const { container } = render(Item, {
      props: {
        name: "pikachu"
      }
    });

    expect(container).toContainHTML('<body><div><li><span class="text-name">pikachu</span></li></div></body>');
    
  });

  test('shows proper item name when rendered', () => {
    const { getByText } = render(Item, { name: 'pikachu' })
  
    expect(getByText('pikachu')).toBeInTheDocument()
  })
});