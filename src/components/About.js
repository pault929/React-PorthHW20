import React from 'react';
import '../App.css';
import { Button } from './Button';
import  './About.css';
import 'bootstrap/dist/css/bootstrap.min.css';


function About () {
    return (
     
      <div class="container">
      <div class="row">
        <div class="col-lg-8">
        <p>Dad, Coder, Coach, Mentor, Bartender, Uncle, Colombian, Entreprenuer, and much more! But for now;
        Coding is on the plate and the goal. This is my second go around in Coding, I finished a program at CUNY Tech Works recently and want continue growing. I prefer the Web Design / Front End side of coding, but am liking and picking up more the back end.
      Hobbies include: cooking, cycling, traveling - when possible, horseback riding, coaching, and public speaking of all things.</p>
      
        </div>
        <div class="col-lg-4">
        <img src={process.env.PUBLIC_URL + "/images/profile2.jpg"} alt='profile picture' text-align="center"></img>

        <h1>Certificates - Resumes</h1>
                <ul class="no-bullets">
                <li><a href={process.env.PUBLIC_URL + "/images/CUNY.jpg"} target="_blank">CUNY Tech Works</a></li>
                <li><a href={process.env.PUBLIC_URL + "PaulTCoding.pdf"} target="_blank">Front End <em>Resume</em></a></li>
                <li><a href={process.env.PUBLIC_URL + "src/PDF/tororese2020.pdf"} target="_blank">Hospitality <em>Resume</em></a></li>
                </ul>    
        </div>
      </div>
    </div>
  
  
  
  
      
    );
  }

  export default About;