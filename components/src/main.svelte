<script>
	import Button from './components/button/button.svelte'

	export let name;
</script>

<main>
	<h1>{name}!</h1>
	<Button text="Ok"></Button>
</main>

<style>
	main {
		text-align: center;
		margin: 0 auto;
	}
</style>