import React, { useEffect, useState } from 'react';
import axios from 'axios';
import conf from '../../conf/conf';
import useGeneres from '../../hooks/useGenre';
import SingleContent from '../../components/SingleContent/SingleContent';
import Genres from '../../components/Genres/Genres';
import CustomPagination from '../../components/Pagination/CustomPagination';
import './Series.css';

const Series = () => {
	const [page, setPage] = useState(1);
	const [content, setContent] = useState([]);
	const [numOfPages, setNumOfPages] = useState();
	const [genres, setGenres] = useState([]);
	const [selectedGenres, setSelectedGenres] = useState([]);
	const genreforURL = useGeneres(selectedGenres);

	const fetchSeries = async () => {
		const { data } = await axios(
			`${conf.moviedbUrl}/discover/tv?api_key=${conf.moviedbApi}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}&with_genres=${genreforURL}`
		);

		setContent(data.results);
		setNumOfPages(data.total_pages);
	};

	useEffect(() => {
		window.scroll(0, 0);
		fetchSeries();
	}, [page, genreforURL]);

	return (
		<div>
			<span className="pageTitle">Discover Series</span>

			<Genres
				type="tv"
				genres={genres}
				setGenres={setGenres}
				selectedGenres={selectedGenres}
				setSelectedGenres={setSelectedGenres}
				setPage={setPage}
			/>

			<div className="series">
				{content &&
					content.map(c => (
						<SingleContent
							key={c.id}
							id={c.id}
							title={c.title || c.name}
							poster={c.poster_path}
							date={c.first_air_date || c.release_date}
							media_type='tv'
							vote_average={c.vote_average}
							original_language={c.original_language}
						/>
					))}
			</div>

			{numOfPages > 1 && (
				<CustomPagination
					setPage={setPage}
					numOfPages={numOfPages > 500 ? 500 : numOfPages}
				/>
			)}
		</div>
	);
};

export default Series;
