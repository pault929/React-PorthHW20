import React from 'react';
import '../App.css';
import { Button } from './Button';
import  './About.css';


function About () {
    return (
      <div className='hero-container'>
        {/* <video src='/videos/video-1.mp4' autoPlay loop muted /> */}
        <h1 className="abtpg"><em>Under Severe Construction</em></h1>
  
        {/* <img src='/images/nyc.jpg'> */}
  
  
  
  
        <div className='hero-btns'>
          <Button
            className='btns'
            buttonStyle='btn--outline'
            buttonSize='btn--large'
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

  export default About;