import React from 'react';
// import { BrowserRouter, Route, Switch } from 'react-router-dom';
// import { Container } from '@mui/material';
import Container from '@mui/material/Container';
import Header from './components/Header/Header';
import SimpleBottomNavigation from './components/MainNav';
import { Movies, Search, Series, Trending } from './Pages/index';
import './App.css';
import { Outlet } from 'react-router-dom';

function App() {
	return (
		<>
			{/* <BrowserRouter> */}
			<Header />
			<div className="app">
				<Container>
					<Outlet />
				</Container>
			</div>
			<SimpleBottomNavigation />

			{/* </BrowserRouter> */}
		</>
	);
}

export default App;
