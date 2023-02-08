<script>
    export let search;
    let searchParam = "";

    function formSubmitted() {
        if (searchParam !== "") {
            search(searchParam)
        }
        searchParam = "";
    }
</script>

<form class="searchBar" on:submit|preventDefault={formSubmitted}>
    <input class="searchInput" bind:value={searchParam} placeholder="Search movies or series..." type="text">
    <button>Search</button>
</form>

<style>
    .searchBar {
		display: flex;
		flex-direction: row;
		align-items: center;
	}

	.searchInput {
		width: 600px;
		margin: 5px;
	}

	button {
		width: 150px;
		margin: 5px;
	}
</style>