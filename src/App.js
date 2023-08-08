import React, { useEffect, useRef } from 'react';
// import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { RoughEase } from 'gsap/all'; // Import RoughEase from react-gsap
import { Linear, Sine, Bounce, Elastic, Power0 } from 'gsap/all'; // Import necessary easing functions
import Home from './components/Home';


import 'aos/dist/aos.css'; // Import AOS styles
import AOS from 'aos';

function App() {
 
  return (
    
     <>

   
  
      <Home/>
     
     </>
    
  );
};

export default App;
