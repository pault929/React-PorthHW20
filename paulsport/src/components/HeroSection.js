import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';

function HeroSection() {
  return (
    <div className='hero-container'>
      {/* <video src='/videos/video-1.mp4' autoPlay loop muted /> */}
      <h1><em>Paul Ignacio Toro</em></h1>
      <h3>Dad, Coder, Coach, Mentor, Bartender, Uncle,
      Colombian, Entreprenuer, and much more! </h3> 




      <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          Git Hub Page <i className='fab fa-github' />
        </Button>
        <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          onClick={console.log('hey')}
        >
          Entrapenuer Page <i className='fas fa-business-time' />
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;