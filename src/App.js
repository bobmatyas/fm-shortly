import React from 'react';
import './App.css';
import Header from './components/header';
import Splash from './components/splash';
import Features from './components/features';
import Boost from './components/boost';
import Footer from './components/footer';

function App() {


  return (
    <>
      <Header />

      <main>
        <Splash />

        <Features />

        <Boost />
      </main>

      <Footer />
    </>
  );
}

export default App;