<script>
	import { v4 } from 'uuid';
	import { todoStore } from '../data/stores/todo-store';
	import { requestPost } from '../data/functions/api';

	let inputValue = '';

	const additem = async () => {
		const newTodos = await requestPost('/api/todo', { id: v4(), value: inputValue });
		$todoStore = newTodos;
		inputValue = '';
	};
</script>

<div class="input-wrapper">
	<input
		placeholder="A thing I gotta do asap"
		on:keydown={(e) => (e.code === 'Enter' ? additem() : null)}
		bind:value={inputValue}
		type="text"
	/>
	<button on:click={additem}>Add</button>
</div>

<style>
	.input-wrapper {
		display: flex;
		flex-direction: column;
		width: 50%;
	}
	input {
		padding: 5px;
		border: 1px solid #e1e1e1;
		border-radius: 5px;
		font-size: 1.3em;
		margin-top: 5px;
	}
	button {
		border: none;
		margin-top: 5px;
		border-radius: 5px;
		padding: 10px 60px;
		align-self: flex-end;
		background-color: #e1e1e1;
	}
	button:hover {
		cursor: pointer;
		background-color: rgb(220, 220, 220);
	}
	button:active {
		background-color: rgb(190, 190, 190);
	}
</style>
