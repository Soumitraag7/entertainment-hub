import React, { useEffect, useState } from 'react';
import { BottomNavigation, BottomNavigationAction, Box } from '@mui/material';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import MovieIcon from '@mui/icons-material/Movie';
import TvIcon from '@mui/icons-material/Tv';
import SearchIcon from '@mui/icons-material/Search';
import { useNavigate } from 'react-router-dom';

export default function SimpleBottomNavigation() {
	const [value, setValue] = useState(0);
	const navigate = useNavigate();

	useEffect(() => {
		if (value === 0) navigate('/');
		if (value === 1) navigate('/movies');
		if (value === 2) navigate('/series');
		if (value === 3) navigate('/search');
	}, [value]);

	return (
		<Box
			sx={{
				width: '100%',
				position: 'fixed',
				bottom: 0,
				// backgroundColor: '#000',
				zIndex: 100
			}}
		>
			<BottomNavigation
				showLabels
				value={value}
				onChange={(event, newValue) => {
					setValue(newValue);
				}}
				sx={{
					backgroundColor: '#2d313a'
				}}
			>
				<BottomNavigationAction
					sx={{ color: '#fff' }}
					label="Trending"
					icon={<WhatshotIcon />}
				/>

				<BottomNavigationAction
					sx={{ color: '#fff' }}
					label="Movies"
					icon={<MovieIcon />}
				/>

				<BottomNavigationAction
					sx={{ color: '#fff' }}
					label="TV Series"
					icon={<TvIcon />}
				/>

				<BottomNavigationAction
					sx={{ color: '#fff' }}
					label="Search"
					icon={<SearchIcon />}
				/>
			</BottomNavigation>
		</Box>
	);
}
