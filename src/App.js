import React from 'react';
import './App.css';
import Header from './components/header';
import Splash from './components/splash';
import Boost from './components/boost';

function App() {


  return (
    <>
      <Header />

      <main>
        <Splash />

        <Boost />
      </main>
    </>
  );
}

export default App;