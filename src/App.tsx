import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import React, { useState, useEffect } from 'react';
import { Illegal } from './comps/Illegal';
import { Victims } from './comps/Victims';
import Navbar from './comps/Navbar';
import Home from './comps/Home';
import { useState } from 'react';

const App = () => {
	const [language, setLanguage] = useState('en');

	// Function to toggle between 'en' and 'jp'
	const toggleLanguage = () => {
		setLanguage((prevLang) => (prevLang === 'en' ? 'jp' : 'en'));
	};

	return (
		<Router>
			<div className="App">
				{/* {!smallScreen && <Navbar />} */}
				<Navbar language={language} toggleLanguage={toggleLanguage} />
				<Routes>
					<Route path="/" element={<Home language={language} />} />
					<Route path="/victim/:id" element={<Victims />} />
					<Route path="*" element={<Illegal />} />
				</Routes>
			</div>
		</Router>
	);
};

export default App;
