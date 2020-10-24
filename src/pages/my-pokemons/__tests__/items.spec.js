import { render, screen, waitFor, fireEvent, cleanup } from "@testing-library/svelte";
import Items from "../components/pokemon-items.svelte";
import { myPokemonData } from "../../../constants";
import myPokemon from "../../../store/detail/my-pokemon"

describe("Items component rendering", () => {
  
  
  test("should render list li correctly", async () => {
    myPokemonData.forEach(val => myPokemon.addPoke(val))

    let lengthMyPokemon = 0
    myPokemon.subscribe(val => lengthMyPokemon = val.length)
    expect(lengthMyPokemon).toBe(3)
    const { getByText } = render(Items);

    await waitFor(() => screen.getByText(/bulbasaur.*new.*two/i))
    expect(getByText(/bulbasaur.*new.*one/i)).toBeInTheDocument()
    expect(getByText(/bulbasaur.*new.*three/i)).toBeInTheDocument()
    expect(screen.getAllByText(/release/i))
  });
});


describe("Items component actions", () => {
  
  test("expect no data my pokemon on first show", async () => {
    myPokemon.reset()
    let lengthMyPokemon = 0
    myPokemon.subscribe(val => lengthMyPokemon = val.length)
    expect(lengthMyPokemon).toBe(0)
  })
    
  test("should open detail and can delete one my pokemon", async () => {
    myPokemonData.forEach(val => myPokemon.addPoke(val))

    let lengthMyPokemon = 0
    myPokemon.subscribe(val => lengthMyPokemon = val.length)
    expect(lengthMyPokemon).toBe(3)
    const { getByText, queryByText, container } = render(Items);

    await waitFor(() => screen.getByText(/bulbasaur.*new.*two/i))
    expect(getByText(/bulbasaur.*new.*one/i)).toBeInTheDocument()
    expect(getByText(/bulbasaur.*new.*three/i)).toBeInTheDocument()
    expect(screen.getAllByText(/release/i))

    const leftClick = { button: 0 };
    const itemBulbasaurOne = screen.getByText(/bulbasaur.*new.*one/i);
    await fireEvent.click(itemBulbasaurOne, leftClick);

    expect(getByText(/click.*close.*detail/i)).toBeInTheDocument()

    await fireEvent.click(itemBulbasaurOne, leftClick);
    expect(queryByText(/click.*close.*detail/i)).not.toBeInTheDocument()

    const btnDeleteBulbasaurOne = container.firstChild.querySelector('button')
    await fireEvent.click(btnDeleteBulbasaurOne, leftClick);

    myPokemon.deletePoke(1)

    myPokemon.subscribe(val => lengthMyPokemon = val.length)
    expect(lengthMyPokemon).toBe(2)
  });
});