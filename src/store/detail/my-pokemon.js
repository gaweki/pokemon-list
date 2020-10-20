import { writable } from 'svelte/store';

const DEFAULT_DATA = [];

const { subscribe, set, update } = writable(localStorage.getItem("pokemon_my_list") ? JSON.parse(localStorage.getItem("pokemon_my_list")) : DEFAULT_DATA);

const addPoke = newPoke => update(pokemon => {
    localStorage.setItem("pokemon_my_list", JSON.stringify([...pokemon, newPoke]))
    return [...pokemon, newPoke];
});

const deletePoke = idPoke => update(pokemon => {
    let newArr = pokemon.filter( val => val.id !== idPoke)
    localStorage.setItem("pokemon_my_list", JSON.stringify(newArr))
    return newArr;
});

const reset = () => {
    localStorage.setItem("pokemon_my_list", DEFAULT_DATA)
    set(DEFAULT_DATA);
};

export default {
    subscribe,
    addPoke,
    deletePoke,
    reset
}