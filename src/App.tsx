import React from 'react';
import './App.css';
import { Navbar } from './layouts/Navbar AndFooter/Navbar';
import { Footer } from './layouts/Navbar AndFooter/Footer';
import { HomePage } from './layouts/HomePage/HomePage';

export const App = () => {
  return (
    <div>
      <Navbar/>
      <HomePage/>
      <Footer/>
    </div>
    
  );
}