import React, { useState } from 'react';
import './App.css';

import Header from './components/Header/Header';

import Home from './pages/Home/Home';
import Portfolio from './pages/Portfolio/Portfolio';
import Contact from './pages/Contact/Contact';

function App() {

  const [error500, setError500] = useState(null);

  return (
    <>
    {error500 ? (
      <Header />
    ) : (
      <>
        <Header />
        <Home />
        <Portfolio setError500={setError500} />
        <Contact />
      </>
    )}
    </>
  );
}

export default App;
