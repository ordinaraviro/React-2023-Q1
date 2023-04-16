import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Header from './components/Header/Header';
import About from './Pages/About/About';
import Main from './Pages/Main/Main';
import Page404 from './Pages/Page404/Page404';
import FormPage from './Pages/FormPage/FormPage';

import './App.scss';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/form" element={<FormPage />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<Page404 />} />
      </Routes>
    </>
  );
}

export default App;
