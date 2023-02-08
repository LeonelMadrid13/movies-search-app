export async function getMovie(query = 'Interstellar') {
	return await fetch(`/api/get-movie?q=${query}`).then((res) => {
        // console.log(res)
        return res.json();
	});
}
