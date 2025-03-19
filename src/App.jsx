import React from 'react';
import LandingPage from './page/LandingPage';
import Footer from './page/Footer';
import DetailBook from './page/DetailBook';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


function App() {
  return (
    <div>
        <Router>
        <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path='/Detail-Book/:id' element={<DetailBook />} />
      </Routes>
      </Router>


    </div>
  );
}

export default App;