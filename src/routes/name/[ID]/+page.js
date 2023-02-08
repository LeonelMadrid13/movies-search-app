const FETCH_OPTIONS = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'e06eafe6acmshc3bb32b1a13ad19p1978a5jsne829e583ebed',
		'X-RapidAPI-Host': 'imdb8.p.rapidapi.com',
	},
};

/** @type {import('./$types').PageLoad} */
export async function load({ params, fetch, session, stuff }) {
	const res = await fetch(
		`https://imdb8.p.rapidapi.com/actors/get-bio?nconst=${params.ID}`,
		FETCH_OPTIONS
	);
	const data = await res;
	if (res.ok) {
		return {
			props: {
				name:await data,
			},
		};
	}
}
