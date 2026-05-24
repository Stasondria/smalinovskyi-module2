import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import './App.css';

function App() {
    return (
        <Router>
            <div className="app-container">
                <Routes>
                    {/* Головна сторінка зі списком потягів */}
                    <Route path="/" element={<Home />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;