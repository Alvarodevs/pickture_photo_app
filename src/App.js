import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./components/footer";
import Header from "./components/header";
import CardsGrid from "./components/cards_grid";
import Modal from "./components/modal";
import { useDispatch } from "react-redux";
import { searchAsync } from "./features/search/searchSlice";
import Title from './components/title'

function App() {
	const dispatch = useDispatch();

	//Trigger for random cards at app loading
	useEffect(() => {
		dispatch(searchAsync())
	}, [dispatch])

	return (
		<div className="app">
			<BrowserRouter basename={process.env.PUBLIC_URL}>
				<Title/>
				<Header />
				<Routes>
					<Route path="/" element={<CardsGrid />} />
					<Route exact path="/id/:id" element={<Modal />} />
					<Route exact path="/my_photos" element={<CardsGrid />} />
					<Route exact path="/my_photos/:id" element={<Modal />} />
				</Routes>
			</BrowserRouter>
			<Footer />
		</div>
	);
}

export default App;
