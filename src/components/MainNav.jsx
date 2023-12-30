import * as React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import MovieIcon from '@mui/icons-material/Movie';
import TvIcon from '@mui/icons-material/Tv';
import SearchIcon from '@mui/icons-material/Search';

export default function SimpleBottomNavigation() {
	const [value, setValue] = React.useState(0);

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
