import React from 'react'
import Hero from './Hero';
import Awards from './Awards';
import Stats from './Stats';
import Pricing from './Pricing';
import Education from './Education';
import OpenAccount from '../OpenAccount'; 
import Navbar from '../Navbar';
import Award from './Award.css';

function HomePage() {
    return ( 
        <>
          <Award>
          <Navbar/>
          <Hero/>
          <Awards/>
          <Stats/>
          <Pricing/>
          <Education/>
          <OpenAccount/>
        </>
     );
}

export default HomePage;
