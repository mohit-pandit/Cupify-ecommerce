import React from 'react';

// Import required modules
import { Banner_card } from '../components/Banner_card';
import { Latest_product } from '../components/Latest_product';
import { Navbar } from '../components/Header/Navbar/index'
import { Carousel_card } from '../components/Carousel_card';

const Home = () => {
  return (
    <>
      <div>
        <Navbar />
      </div>

      <Carousel_card />

      <div>
        <Banner_card />
      </div>

      <div>
        <Latest_product />
      </div>


    </>
  );
};

export default Home;