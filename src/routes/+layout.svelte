<script>
	import Header from './Header.svelte';
	import './styles.css';
	import Modal from "../shared/modal/index.svelte";

</script>

<div class="app">
	<Header />

	<main>
		<slot />
	</main>
	<Modal />

	<footer>
		<p class="title">~YUKIDOKE~</p>
	</footer>
</div>

<style>
	.app {
		display: flex;
		flex-direction: column;
		min-height: 100vh;
	}

	main {
		flex: 1;
		display: flex;
		flex-direction: column;
		padding: 1rem;
		width: 100%;
		max-width: 64rem;
		margin: 0 auto;
		box-sizing: border-box;
	}

	footer {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		padding: 12px;
	}

	footer p {
		font-weight: bold;
		font-family: 'Zen Kaku Gothic Antique', 'serif';
		font-size: 24px;
		color: #0088ff;
	}

	@media (min-width: 480px) {
		footer {
			padding: 12px 0;
		}
	}
</style>
