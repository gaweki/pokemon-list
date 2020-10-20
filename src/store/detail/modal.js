import { writable } from 'svelte/store';

const DEFAULT_DATA = {
    modal: false
};

const { subscribe, set, update } = writable(DEFAULT_DATA);

const setShowModal = newModal => update( () => {
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