import React from 'react';
import '../App.css';
import { Button } from './Button';
import './Projects.css';
import 'bootstrap/dist/css/bootstrap.min.css';


function Projects() {
  return (
    <div className='hero-container'>
      {/* <video src='/videos/video-1.mp4' autoPlay loop muted /> */}
      <h1 class="mainpg"><em>Projects page </em></h1>
      <h3>Dad, Coder, Coach, Mentor, Bartender, Uncle,
      Colombian, and more! </h3> 




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

export default Projects;