<script lang="ts">
	import type ITodoItem from '../interfaces/ITodoItem';
	export let finished: boolean;
	export let todo: ITodoItem;
	export let onClick: (todo: ITodoItem) => void;
</script>

<p on:click={() => onClick(todo)} class="todo" class:finished={finished === true}>
	{todo.value}
</p>

<style>
	.todo {
		background-color: #e1e1e1;
		text-align: center;
		margin: 5px auto;
		padding: 8px;
		border-radius: 5px;
		width: 80%;
	}
	.todo:hover {
		cursor: pointer;
		background-color: rgb(220, 220, 220);
	}
	.todo:active {
		background-color: rgb(190, 190, 190);
	}
	.finished {
		background-color: #fc7373;
	}
	.finished:hover {
		background-color: #ff5a5a;
	}
	.finished:active {
		background-color: #ff3e3e;
	}
</style>
