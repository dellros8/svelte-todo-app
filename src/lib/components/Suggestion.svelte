<script lang="ts">
	import { todoStore } from '../data/stores/todo-store';
	import type ITodoItem from '$lib/interfaces/ITodoItem';
	import { suggestionStore } from '../data/stores/suggestion-store';
	import { requestPost, requestDelete } from '$lib/data/functions/api';

	const additem = async (topSuggestion: ITodoItem) => {
		const newTodos = await requestPost(`/api/todo`, topSuggestion);
		$todoStore = newTodos;
		const remainingSuggestions = await requestDelete(
			`/api/todo/suggestion?suggestionId=${topSuggestion.id}`
		);
		$suggestionStore = remainingSuggestions;
	};
</script>

{#if $suggestionStore.length}
	<button class="suggestion-button" on:click={() => additem($suggestionStore[0])}
		>{$suggestionStore[0]?.value}</button
	>
{:else}
	<button class="suggestion-button no-suggestion">No more suggestions</button>
{/if}

<style>
	.suggestion-button {
		margin-top: 10px;
		border: none;
		width: 50%;
		text-align: left;
		padding: 10px;
		border-radius: 5px;
		background-color: #e1e1e1;
	}
	.suggestion-button:hover {
		cursor: pointer;
		background-color: rgb(220, 220, 220);
	}
	.suggestion-button:active {
		background-color: rgb(190, 190, 190);
	}
	.no-suggestion {
		background-color: #ebebeb;
	}
	.no-suggestion:hover, .no-suggestion:active {
		background-color: #ebebeb;
		cursor: not-allowed;
	}
</style>
