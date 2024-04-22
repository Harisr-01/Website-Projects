import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Home from './components/home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
import Header from './components/header';
import ContentList from './components/contentList';
import ContentDetails from './components/contentDetails';
import ContentAdd from './components/contentAdd';
import ContentUpdate from './components/contentUpdate';
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Router>
        <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/data" element={<ContentList />} />
        <Route path="/data/:id" element={<ContentDetails />} />
        <Route path="/data/add" element={<ContentAdd />} />
        <Route path="/data/update/:id" element={<ContentUpdate />} />
      </Routes>
    </Router>

  </React.StrictMode>
);