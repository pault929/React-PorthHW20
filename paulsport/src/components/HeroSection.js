import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function HeroSection() {
  return (
    <div className='hero-container'>
      <h1 class="mainpg"><em>Paul Ignacio Toro</em></h1>
      <h3>Full Stack developer with a focus on UX/UI designs. </h3> 




      <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
          // href='http://www.yahoo.com'
        >
        Git Hub <i className='fab fa-github' />
        </Button>
        <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
        >
          Resume <i className='fas fa-file' />
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;