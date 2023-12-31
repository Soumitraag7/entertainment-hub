import axios from 'axios';
import React, { useEffect, useState } from 'react';
import conf from '../../conf/conf';
import SingleContent from '../../components/SingleContent/SingleContent';
import CustomPagination from '../../components/Pagination/CustomPagination';
import './Trending.css';

const Trending = () => {
	const [page, setPage] = useState(1);
	const [content, setContent] = useState([]);

	const fetchTrending = async () => {
		const { data } = await axios(
			`${conf.moviedbUrl}/trending/all/day?api_key=${conf.moviedbApi}&page=${page}`
		);

		setContent(data.results);
	};

	useEffect(() => {
		window.scroll(0, 0);
		fetchTrending();
	}, [page]);

	return (
		<div>
			<span className="pageTitle">Trending Today</span>
			<div className="trending">
				{content &&
					content.map(c => (
						<SingleContent
							key={c.id}
							id={c.id}
							title={c.title || c.name}
							poster={c.poster_path}
							date={c.first_air_date || c.release_date}
							media_type={c.media_type}
							vote_average={c.vote_average}
							original_language={c.original_language}
						/>
					))}
			</div>
			<CustomPagination setPage={setPage} />
		</div>
	);
};

export default Trending;
