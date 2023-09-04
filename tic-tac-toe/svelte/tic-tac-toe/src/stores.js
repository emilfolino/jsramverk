import { writable } from 'svelte/store'

export const state = writable({
    history: [{
        squares: Array(9).fill(null),
    }],
    stepNumber: 0,
    xIsNext: true,
    squares: Array(9).fill(null),
    status: "",
});

