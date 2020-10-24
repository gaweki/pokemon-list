import { render } from "@testing-library/svelte";
import Items from "../components/pokemon-items.svelte";


describe("Items component", () => {
  
  test("should render list li correctly", () => {
    const { container } = render(Items, {
      props: {
        datas: [
          {
            name: "pikachu"
          },
          {
            name: "blastoise"
          }
        ]
      }
    });

    expect(container).toContainHTML('<body><div><ul><li><a href="/detail/pikachu"><span class="text-name">pikachu</span></a></li><li><a href="/detail/blastoise"><span class="text-name">blastoise</span></a></li></ul></div></body>');
    
  });
});