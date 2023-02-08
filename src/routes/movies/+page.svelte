<script>
	import { getMovie } from '../../services/movies';
    import SearchForm from '../../components/SearchForm.svelte';

	let moviePromise = getMovie();
	console.log(moviePromise)

    async function search(searchParam) {
        let movie = await getMovie(searchParam);
        moviePromise = movie
    }

	async function getActorID(actor){
		let actorID = await actor.split('/').pop();
		return actorID;
	}

</script>


<div class="container">
    <SearchForm search={search} />
    
    {#await moviePromise then movie}
        {#each movie as result}
            {#if result.titleType === "movie" || result.titleType === "tvMiniSeries" || result.titleType === 'tvSeries' || result.titleType === 'short'}
                <div class="movie">
                    <h4>{result.title}</h4>
                    <p>{result.year}</p>
                    <img src={result.image?.url} alt="" />
					{#if result.principals}
						{#each result.principals as actor}
							<a href={`${actor.id}`}>{actor.name}</a>
						{/each}
					{/if}
                </div>
            {/if}
        {/each}
    {/await}

</div>

<style>
	.container {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex-wrap: wrap;
		
	}

	.movie {
		position: relative;
		display: flex;
		flex-direction: column;
		align-items: center;
		max-width: 500px;
		max-height: 600px;
		border: 1px solid black;
		box-shadow: 10 0 0 0;
		padding: 50px;
		margin: 10px;
        background-color: #1c2b36;
		box-shadow: 0 0 100px rgba(0, 0, 0, 0.1);
		border-radius: 8px;
	}

	img {
		width: 50%;
	}

	h4 {
		font-size: 1.5rem;
		font-weight: 600;
		margin: 0;
	}
</style>
