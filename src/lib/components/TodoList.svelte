<script lang="ts">
	import { onMount } from 'svelte';
	import { todoStore } from '../data/stores/todo-store';
	import { todoFinishedStore } from '../data/stores/todo-finished-store';
	import type ITodoItem from '../interfaces/ITodoItem';
	import TodoItem from './TodoItem.svelte';
	import { requestGet, requestDelete, requestPost } from '$lib/data/functions/api';

	onMount(async () => {
		const todoResponse = await requestGet('/api/todo');
		$todoStore = todoResponse;
	});

	const finishTodo = async (todoItem: ITodoItem) => {
		const remainingTodos = await requestDelete(`/api/todo?id=${todoItem.id}`);
		$todoStore = remainingTodos;
		const newFinishedTodos = await requestPost(`/api/finishedtodo`, todoItem);
		$todoFinishedStore = newFinishedTodos;
	};
</script>

<section class="todos">
	<h3 class="header">To do</h3>
	{#each $todoStore as todo}
		<TodoItem finished={false} {todo} onClick={finishTodo} />
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
