<script lang="ts">
	import { onMount } from 'svelte';
	import { requestDelete, requestGet } from '$lib/data/functions/api';
	import { todoFinishedStore } from '../data/stores/todo-finished-store';
	import type ITodoItem from '../interfaces/ITodoItem';
	import TodoItem from './TodoItem.svelte';

	onMount(async () => {
		const todoFinishedResponse = await requestGet('/api/finishedtodo');
		$todoFinishedStore = todoFinishedResponse;
	});

	const removeTodo = async (todoItem: ITodoItem) => {
		const remainingFinishedTodos = await requestDelete(`/api/finishedtodo?id=${todoItem.id}`);
		$todoFinishedStore = remainingFinishedTodos;
	};
</script>

<section class="todos">
	<h3 class="header">Finished</h3>
	{#each $todoFinishedStore as todo}
		<TodoItem finished={true} {todo} onClick={removeTodo} />
	{/each}
</section>

<style>
	.todos {
		flex: 0.5;
	}
	.header {
		text-align: center;
	}
</style>
