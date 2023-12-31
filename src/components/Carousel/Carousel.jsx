import React, { useEffect, useState } from 'react';
import axios from 'axios';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import conf from '../../conf/conf';
import './Carousel.css';

const handleDragStart = e => e.preventDefault();

function Carousel({ id, media_type }) {
	const [credits, setCredits] = useState([]);

	const items = credits.map(c => (
		<div className="carouselItem">
			<img
				src={
					c.profile_path ? `${conf.img_300}/${c.profile_path}` : conf.noPicture
				}
				alt={c?.name}
				onDragStart={handleDragStart}
				className="carouselItem__img"
			/>
			<b className="carouselItem__txt">{c?.name}</b>
		</div>
	));

	const responsive = {
		0: {
			items: 3
		},
		512: {
			items: 5
		},
		1024: {
			items: 7
		}
	};

	const fetchCredits = async () => {
		const { data } = await axios.get(
			`${conf.moviedbUrl}/${media_type}/${id}/credits?api_key=${conf.moviedbApi}&language=en-US`
		);
		setCredits(data.cast);
	};

	useEffect(() => {
		fetchCredits();
	}, []);

	return (
		<AliceCarousel
			mouseTracking
			infinite
			disableDotsControls
			disableButtonsControls
			responsive={responsive}
			items={items}
			autoPlay
		/>
	);
}

export default Carousel;
