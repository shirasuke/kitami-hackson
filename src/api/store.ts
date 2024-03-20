import { writable } from 'svelte/store';

export const uploadLatitude = writable<string>('');
export const uploadLongitude = writable<string>('');
