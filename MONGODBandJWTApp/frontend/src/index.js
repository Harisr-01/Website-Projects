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
import { LogInPage } from './components/login';
import { SignUpPage } from './components/signup';
import { PrivateRoute } from './auth/privateRoute';
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Router>
        <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LogInPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/data" element={<ContentList />} />
        <Route path="/data/:id" element={<ContentDetails />} />
        <Route path="/data/add" element={<PrivateRoute><ContentAdd /></PrivateRoute>} />
        <Route path="/data/update/:id" element={<PrivateRoute><ContentUpdate /></PrivateRoute>} />
      </Routes>
    </Router>

  </React.StrictMode>
);