import { render, waitFor, fireEvent, screen } from "@testing-library/svelte";
import Home from "../home.svelte";
import { handleFetch } from '../../../helpers';
import { sampleResPageOne } from '../../../constants';

describe("Home rendering testing", () => {

  test(`Should load page and can click a poke`, async () => {
    const { getByText } = render(Home)
    expect(getByText("List All Pokemon")).toBeInTheDocument()
    const leftClick = { button: 0 };
    await waitFor(() => expect(getByText("Load More")).toBeInTheDocument(), { timeout: 5000 })
    expect(getByText(/bulbasaur/i)).toBeInTheDocument()
    expect(getByText(/venusaur/i)).toBeInTheDocument()
    expect(getByText(/arbok/i)).toBeInTheDocument()
    expect(getByText(/nidorina/i)).toBeInTheDocument()
    const itemPoke = screen.getByText(/bulbasaur/i);
    await fireEvent.click(itemPoke, leftClick);
  })

});

describe("Home fetch testing", () => {
  const resPerPage = 30;

  function mockFetch(data) {
    return jest.fn().mockImplementation(() =>
      Promise.resolve({
        ok: true,
        json: () => data
      })
    );
  }

  test(`should handle mock fetch https://pokeapi.co/api/v2/pokemon?offset=0&limit=30 li correctly`, async () => {
    const hitPageOne = await handleFetch(`https://pokeapi.co/api/v2/pokemon?offset=0&limit=${resPerPage}`);

    expect(hitPageOne).toEqual(sampleResPageOne);
  })

  test(`show all pokemon on first load`, async () => {
    fetch = mockFetch(sampleResPageOne);
    const pokes = await handleFetch(`https://pokeapi.co/api/v2/pokemon?offset=0&limit=${resPerPage}`);
    expect(pokes).toEqual(sampleResPageOne);
    expect(fetch).toHaveBeenCalledTimes(1);
    expect(fetch).toHaveBeenCalledWith(
      `https://pokeapi.co/api/v2/pokemon?offset=0&limit=${resPerPage}`
    );
  })

  test('returns handleFetch promise handling the error', async () => {
    fetch = mockFetch('');
    expect(handleFetch()).rejects.toBe('')
  })

});