import { writable } from 'svelte/store';

const DEFAULT_DATA = {
    detail: {}
};

const { subscribe, set, update } = writable(DEFAULT_DATA);

const setCurrentDetailPoke = newDetail => update( () => {
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