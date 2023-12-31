import React from 'react';
import conf from '../../conf/conf';
import './SingleContent.css';
import { Badge } from '@mui/material';

function SingleContent({
	id,
	title,
	poster,
	date,
	media_type,
	vote_average,
	original_language
}) {
	return (
		<div className="media">
			<Badge
				badgeContent={vote_average.toFixed(1)}
				color={vote_average > 6 ? 'primary' : 'secondary'}
			/>
			<Badge
				anchorOrigin={{
					vertical: 'top',
					horizontal: 'left'
				}}
				badgeContent={original_language.toUpperCase()}
				color={vote_average > 6 ? 'secondary' : 'primary'}
			/>
			<img
				className="poster"
				src={poster ? `${conf.img_300}/${poster}` : conf.unavailable}
				alt={title}
			/>

			<b className="title">{title}</b>

			<span className="subTitle">
				{media_type === 'tv' ? 'TV Series' : 'Movie'}
				<span className="subTitle">{date}</span>
			</span>
		</div>
	);
}

export default SingleContent;
