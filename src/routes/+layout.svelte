<div>
	<slot />
</div>

<style>
	:global(body) {
		display: grid;
		font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu,
		Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
		place-content: center;
		margin: 0;
		min-height: 100vh;
	}
	:global(h1, h2, h3, h4, h5) {
		margin: 0;
	}
	:global(*, *::after, *::before) {
		box-sizing: border-box;
	}

	div {
		display: block;
		position: relative;
	}
</style>