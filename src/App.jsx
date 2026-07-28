/* src/App.jsx */
import React from 'react';
import { ShellLayout } from './components/layout/ShellLayout';
import { Hero } from './components/sections/Hero';
import { Heritage } from './components/sections/Heritage';
import { Collections } from './components/sections/Collections';
import { Featured } from './components/sections/Featured';
import { GoldRate } from './components/sections/GoldRate';
import { Occasions } from './components/sections/Occasions';
import { NewArrivals } from './components/sections/NewArrivals';
import { WhyChoose } from './components/sections/WhyChoose';
import { OurWorld } from './components/sections/OurWorld';
import './App.css';

function App() {
  return (
    <ShellLayout>
      <Hero />
      <Heritage />
      <Collections />
      <Featured />
      <GoldRate />
      <Occasions />
      <NewArrivals />
      <WhyChoose />
      <OurWorld />
    </ShellLayout>
  );
}

export default App;
