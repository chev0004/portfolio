import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import { Illegal } from './comps/Illegal';
import { Victims } from './comps/Victims';
import { Navbar } from './comps/Navbar';
import { Home } from './comps/Home';

const test: Boolean = true;

export default function App() {
    const [smallScreen, setSmallScreen] = useState(false);

    const checkScreenWidth = () => {
        setSmallScreen(window.innerWidth <= 960); // Adjust the width as needed
    };

    useEffect(() => {
        checkScreenWidth(); // Check on initial render

        window.addEventListener('resize', checkScreenWidth);

        return () => {
            window.removeEventListener('resize', checkScreenWidth);
        };
    }, []);

    return (
        <Router>
            <div className='App'>
                {!smallScreen && <Navbar />}
                {/* <Navbar /> */}
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/victim/:id' element={<Victims />} />
                    <Route path='*' element={<Illegal />} />
                </Routes>
            </div>
        </Router>
    );
}
