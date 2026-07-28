/* src/App.jsx */
import React from 'react';
import { ShellLayout } from './components/layout/ShellLayout';
import { Hero } from './components/sections/Hero';
import { Heritage } from './components/sections/Heritage';
import { Collections } from './components/sections/Collections';
import { Featured } from './components/sections/Featured';
import './App.css';

function App() {
  return (
    <ShellLayout>
      <Hero />
      <Heritage />
      <Collections />
      <Featured />
    </ShellLayout>
  );
}

export default App;
