import { writable } from 'svelte/store';

export const uploadLatitude = writable<number>(0);
export const uploadLongitude = writable<number>(0);
