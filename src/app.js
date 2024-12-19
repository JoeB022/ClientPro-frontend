import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ClientList from './pages/ClientList';
import ClientForm from './pages/ClientForm';
import Navbar from './components/Navbar';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<ClientList />} />
        <Route path="/add-client" element={<ClientForm />} />
      </Routes>
    </Router>
  );
};

export default App;
