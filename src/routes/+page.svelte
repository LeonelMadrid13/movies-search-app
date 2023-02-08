<script>
</script>

<section>
	<div class="chido">
		<h1>🎥 MSnA Search 🍿</h1>
		<span class="Buttons">
			<button
				onclick="window.location.href = 'http://localhost:5173/movies';"
				>Start looking for movies</button
			>
		</span>
	</div>
</section>

<style>
	h1 {
		font-size: 2rem;
		font-weight: 700;
		margin: 0;
		padding: 75px;
	}

	button {
		width: 200px;
		margin: 5px;
	}

	section {
		padding: 16px;
		max-width: 100%;
		background-color: #1c2b36;
		box-shadow: 0 0 100px rgba(0, 0, 0, 0.1);
		border-radius: 8px;
		width: 600px;
		height: 400px;
	}

	.chido {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex-wrap: wrap;
	}

	.Buttons {
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
		flex-wrap: wrap;
	}
</style>
