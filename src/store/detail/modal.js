import { writable } from 'svelte/store';

const DEFAULT_DATA = {
    modal: false
};

// create a store
// subscribe    -> must be exported, will discuss it in future article
// set          -> allows you to set a value to store
// update       -> receives a current store value as input and returns a new one.
const { subscribe, set, update } = writable(DEFAULT_DATA);

const setShowModal = newModal => update(modal => {
    return newModal;
});

const reset = () => {
    set(DEFAULT_DATA);
};

export default {
    subscribe,
    setShowModal,
    reset
}