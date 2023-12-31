const useGeneres = selectedGenres => {
	if (selectedGenres.length < 1) return '';

	const GenereIds = selectedGenres.map(g => g.id);

	return GenereIds.reduce((acc, curr) => acc + ',' + curr);
};

export default useGeneres;
