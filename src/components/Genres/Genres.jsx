import React, { useEffect } from 'react';
import axios from 'axios';
import { Chip } from '@mui/material';
import conf from '../../conf/conf';

function Genres({
	type,
	setPage,
	genres,
	setGenres,
	selectedGenres,
	setSelectedGenres
}) {
	const fetchGenres = async () => {
		const { data } = await axios.get(
			`${conf.moviedbUrl}/genre/${type}/list?api_key=${conf.moviedbApi}&language=en-US`
		);

		setGenres(data.genres);
	};

	const handleAdd = genre => {
		setSelectedGenres([...selectedGenres, genre]);
		setGenres(genres.filter(g => g.id !== genre.id));
		setPage(1);
	};

	const handleRemove = genre => {
		setSelectedGenres(
			selectedGenres.filter(selected => selected.id !== genre.id)
		);
		setGenres([...genres, genre]);
		setPage(1);
	};

	useEffect(() => {
		fetchGenres();

		return () => {
			// setGenres({}); // unmounting
		};
	}, []);

	return (
		<>
			<div style={{ padding: '6px 0' }}>
				{selectedGenres.map(g => (
					<Chip
						key={g.id}
						style={{ margin: 2 }}
						label={g.name}
						clickable
						color="secondary"
						onDelete={() => handleRemove(g)}
					/>
				))}

				{genres &&
					genres.map(g => (
						<Chip
							key={g.id}
							style={{ margin: 2 }}
							label={g.name}
							clickable
							color="primary"
							onClick={() => handleAdd(g)}
						/>
					))}
			</div>
		</>
	);
}

export default Genres;
