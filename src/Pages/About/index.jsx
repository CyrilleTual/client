import React from 'react'
import Team from './Components/Team';

import staff from '../../data/staff.json';
import concept from '../../data/concept.json';
import values from '../../data/values.json';


function About() {

 
  return (
    <div>About

        <Team staff={staff} />

    </div>
  )
}

export default About
