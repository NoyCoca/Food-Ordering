import React from 'react'
import { Routes, Route } from 'react-router-dom';
import HomePage from './components/pages/HomePage/HomePage';
import MenuPage from './components/pages/MenuPage/MenuPage';
import SummaryPage from './components/pages/SummaryPage/SummaryPage';

const Routing = () => {


    return (
        <Routes>
            <Route path="/" element={<HomePage/>} />
            <Route path="/:id" element={<MenuPage/>} />
            <Route path="/summary" element={<SummaryPage/>} />
        </Routes>
    )
}

export default Routing;