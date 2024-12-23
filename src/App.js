import React from 'react';
import './styles/App.css';
import LandingPage from './components/LandingPage';
import Login from './components/Login';
import Registration from './components/Registration';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
            <LandingPage />
      <Login />
      <Registration />
      <Footer />
    </div>
  );
}

export default App;
