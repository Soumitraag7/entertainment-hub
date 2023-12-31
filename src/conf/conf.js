const conf = {
	moviedbApi: String(import.meta.env.VITE_MOVIEDB_API_KEY),

	moviedbUrl: 'https://api.themoviedb.org/3',

	//image sizes for tmdb
	img_300: 'https://image.tmdb.org/t/p/w300',
	img_500: 'https://image.tmdb.org/t/p/w500',

	// contentModal and singleContent
	unavailable: 'https://www.movienewz.com/img/films/poster-holder.jpg',

	// contentModal
	unavailableLandscape:
		'https://user-images.githubusercontent.com/10515204/56117400-9a911800-5f85-11e9-878b-3f998609a6c8.jpg',

	// For Carousel
	noPicture: 'https://upload.wikimedia.org/wikipedia/en/6/60/No_Picture.jpg'
};

export default conf;
