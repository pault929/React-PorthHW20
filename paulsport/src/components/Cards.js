import React from 'react';
import './Cards.css';
import CardItem from './CardItem';
import 'bootstrap/dist/css/bootstrap.min.css';

function Cards() {
  return (
    <div className='cards'>
      <h1>Check out these Group Projects</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/comic.jpg'
              text='Group Project 1 - Start Searching for great Comics'
              label='Repo'
              path='/'
            />
            <CardItem
              src='images/emeets.png'
              text='Group Project 2 - Find a Meeting or Start one'
              label='Repo'
              path='/'
            />
             <CardItem
              src='images/snip.png'
              text='Group Project 3 - UNDER CONSTRUCTION'
              label='Repo'
              path='/'
              />
            
          </ul>
          <h1>Some of my Code in action!</h1>
          <br></br>
          <ul className='cards__items'>
            <CardItem
              src='images/quizp.JPG'
              text='Take a quiz and test your Coding Knowledge'
              label='Repo'
              path='/projects'
            />
            <CardItem
              src='images/readme.jpg'
              text='Create a "Read-Me" file'
              label='Repo'
              path='/projects'
            />
            <CardItem
              src='images/sche2.JPG'
              text='Click here to update your calendar'
              label='Repo'
              path='/projects'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;