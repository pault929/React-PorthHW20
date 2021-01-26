import React from 'react';
import './Footer.css';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
// import { faFacebook, faTwitter, faLinkedinIn, faInstagram, faGithub } from "@fortawesome/free-brands-svg-icons"

function Footer() {
  return (
    <div className='footer-container'>
      <section class='social-media'>
        <div class='social-media-wrap'>
          <div class='footer-logo'>
            <Link to='/' className='social-logo'>
              P.I.T.
              <i class='fas fa-laptop-code' />
            </Link>
          </div>
          
          <div class='social-icons'>
               <a href="https://www.facebook.com/torosnap" >
               <i class='fab fa-facebook' />
               </a>
            
              <a href="https://www.instagram.com/torosnap">
              <i class='fab fa-instagram' />
              </a>
          
              <a href="https://www.github.com/pault929">
              <i class='fab fa-github' />
              </a>
              

              <a href="https://www.linkedin.com/in/paul-ignacio-toro">
              <i class='fab fa-linkedin' />
              </a>
        
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;