import './App.scss';
import React from 'react';
import Header from './components/Header/Header';
import { Routes, Route } from 'react-router-dom';
import About from './Pages/About';
import Main from './Pages/Main';
import Info from './Pages/Info';
import Page404 from './Pages/Page404';
function App() {
    return (React.createElement(React.Fragment, null,
        React.createElement(Header, null),
        React.createElement(Routes, null,
            React.createElement(Route, { path: '/', element: React.createElement(Main, null) }),
            React.createElement(Route, { path: '/about', element: React.createElement(About, null) }),
            React.createElement(Route, { path: '/info', element: React.createElement(Info, null) }),
            React.createElement(Route, { path: '*', element: React.createElement(Page404, null) }))));
}
export default App;
