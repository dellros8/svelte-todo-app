<script>
	import { onMount } from 'svelte';
	import TodoInput from '../lib/components/TodoInput.svelte';
	import TodoList from '../lib/components/TodoList.svelte';
	import TodoFinishedList from '../lib/components/TodoFinishedList.svelte';
	import Suggestion from '../lib/components/Suggestion.svelte';
	import { suggestionStore } from '../lib/data/stores/suggestion-store';

	const fetchPresets = async () => {
		try {
			const response = await fetch('http://localhost:3000/api/todo/suggestion');
			const data = await response.json();
			$suggestionStore = data;
		} catch (e) {
			console.log(e);
		}
	};
	onMount(fetchPresets);
</script>

<main>
	<label for="todo-input">
		Write an important thing that you need to do, or choose from suggestions below
	</label>
	<Suggestion />
	<TodoInput />
	<div class="todos">
		<TodoList />
		<TodoFinishedList />
	</div>
</main>

<style>
	main {
		font-family: Helvetica;
		display: flex;
		width: 70%;
		margin: auto;
		align-self: center;
		justify-content: center;
		align-items: center;
		flex-direction: column;
	}

	label {
		margin-top: 100px;
	}

	.todos {
		display: flex;
		margin-top: 30px;
		flex-direction: row;
		flex: 1;
		width: 100%;
	}
</style>
