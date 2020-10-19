import { writable } from 'svelte/store';

//value used as default for the current store
const DEFAULT_DATA = {
  next: "",
  previous: ""
};

// create a store
// subscribe    -> must be exported, will discuss it in future article
// set          -> allows you to set a value to store
// update       -> receives a current store value as input and returns a new one.
const { subscribe, set, update } = writable(DEFAULT_DATA);

//receives a new contact in input and updates current stored value by pushing a new one
const addContact = contact => update(contacts => {
    //we're returning a new array in order to achieve reactivity
    return [...contacts, contact];
});

// sets a default value to store
const reset = () => {
    set(DEFAULT_DATA);
};

//public methods
export default {
    subscribe,
    addContact,
    reset
}