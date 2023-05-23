import React from 'react'

import Pub from "./Components/Pub";
import Slider from './Components/Slider';
import Choise from './Components/Choise';
import Selection from './Components/Selection';

function Home() {
  return (
    <main className='container'>  
      <Pub />
      <Slider />
      <Choise />
      <Selection />
    </main>
   
  )
}

export default Home