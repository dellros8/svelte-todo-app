import { writable } from 'svelte/store';
import type { Writable } from 'svelte/store';
import type ITodoItem from '$lib/interfaces/ITodoItem';

const todoStore: Writable<ITodoItem[]> = writable([]);

export { todoStore };