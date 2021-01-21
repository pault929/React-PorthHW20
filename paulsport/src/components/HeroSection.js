import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ResumePdf from '../public/pdf/tororese2020.pdf'

function HeroSection() {
  return (
    <div className='hero-container'>
     
      <h1 class="mainpg"><em>Paul Ignacio Toro</em></h1>
      <h3>Full Stack developer with a focus on UX/UI designs. </h3> 
      {/* <p class='mainpg'>With the focus on designn and function to stream line and creat esmooth transitions.</p> */}
      <br></br>
      <img class='pic' src="images/profile2.jpg" alt='profile picture' text-align="center"></img>



      <div className='hero-btns'>
        
        <Button 
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          path ={ResumePdf}
        >
          Resume 
        </Button>

        <Button 
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          path='https://github.com/pault929'
        >
          Github
        </Button>
      </div> 
    </div>
  );
}

export default HeroSection;