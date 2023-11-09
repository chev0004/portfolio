import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Illegal } from './comps/Illegal';
import { Victims } from './comps/Victims';
import { Navbar } from './comps/Navbar';
import { Home } from './comps/Home';

export default function App() {
    return (
        <Router>
            <div className='App'>
                <Routes>
                    <Route path='/' element={<Navbar />} />
                    <Route path='/basement' element={<Home />} />
                    <Route path='/victim/:id' element={<Victims />} />
                    <Route path='*' element={<Illegal />} />
                </Routes>
            </div>
        </Router>
    );
}
