import React from 'react';
import Hero from '../components/Hero';
import Services from '../services/Services';
import OfferBlock from '../components/OfferBlock';

const Home = () => {
  return (
    <main className="home-main">
      <Hero />
      <Services />
      <OfferBlock />
    </main>
  );
};

export default Home;
