import { writable } from 'svelte/store';

const DEFAULT_DATA = {
    detail: {}
};

// create a store
// subscribe    -> must be exported, will discuss it in future article
// set          -> allows you to set a value to store
// update       -> receives a current store value as input and returns a new one.
const { subscribe, set, update } = writable(DEFAULT_DATA);

const setCurrentDetailPoke = newDetail => update(detail => {
    return newDetail;
});

const reset = () => {
    set(DEFAULT_DATA);
};

export default {
    subscribe,
    setCurrentDetailPoke,
    reset
}