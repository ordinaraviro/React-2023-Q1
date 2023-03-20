import './App.scss';
import React from 'react';
import Header from './components/Header/Header';
import { Routes, Route } from 'react-router-dom';
import About from './Pages/About';
import Main from './Pages/Main';
import Info from './Pages/Info';
import Page404 from './Pages/Page404';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/about" element={<About />} />
        <Route path="/info" element={<Info />} />
        <Route path="*" element={<Page404 />} />
      </Routes>
    </>
  );
}

export default App;
