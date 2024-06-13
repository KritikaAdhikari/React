import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter,Routes, Route, Link } from 'react-router-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import MyRoute from './MyRoute';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <MyRoute />
    </BrowserRouter>
  </React.StrictMode>
);
reportWebVitals();
