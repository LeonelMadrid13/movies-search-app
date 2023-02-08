const FETCH_OPTIONS = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'e06eafe6acmshc3bb32b1a13ad19p1978a5jsne829e583ebed',
		'X-RapidAPI-Host': 'imdb8.p.rapidapi.com',
	},
};

export async function GET(event) {
	// console.log(event)
	const { searchParams } = event.url;
	const query = searchParams.get('q') ?? 'Interstellar';
	// console.log(query)
	const response = await fetch(
		`https://imdb8.p.rapidapi.com/title/find?q=${query}`,
		FETCH_OPTIONS
	);
	const data = await response.json();
	const { results } = data;

	return new Response(JSON.stringify(results));
}
