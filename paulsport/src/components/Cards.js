import React from 'react';
import './Cards.css';
import CardItem from './CardItem';
import 'bootstrap/dist/css/bootstrap.min.css';

function Cards() {
  return (
    <div className='cards'>
      <h1>Check out these EPIC Destinations!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/coding.jpg'
              text='Click and explore my personal Github Repos'
              label='Adventure'
              path='/'
            />
            <CardItem
              src='images/nyc.jpg'
              text='Travel through the Islands of Bali in a Private Cruise'
              label='Luxury'
              path='/'
            />
          </ul>
          <h1>Some of my Code in action!</h1>
          <br></br>
          <ul className='cards__items'>
            <CardItem
              src='images/quizp.JPG'
              text='Take a quiz and test your Coding Knowledge'
              label='Start'
              path='/projects'
            />
            <CardItem
              src='images/readme.jpg'
              text='Create a "Read-Me" file'
              label='Adventure'
              path='/projects'
            />
            <CardItem
              src='images/sche2.JPG'
              text='Click here to update your calendar'
              label='Plan Your Day'
              path='/projects'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;