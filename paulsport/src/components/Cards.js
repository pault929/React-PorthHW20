import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

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
              path='/https://github.com/pault929'
            />
            <CardItem
              src='images/nyc.jpg'
              text='Travel through the Islands of Bali in a Private Cruise'
              label='Luxury'
              path='/services'
            />
          </ul>
          <h1>Some of my Code in action!</h1>
          <br></br>
          <ul className='cards__items'>
            <CardItem
              src='images/quizp.JPG'
              text='Take a quiz and test your Coding Knowledge'
              label='Start'
              path='/services'
            />
            <CardItem
              src='images/readme.jpg'
              text='Create a "Read-Me" file'
              label='Adventure'
              path='/products'
            />
            <CardItem
              src='images/sche2.JPG'
              text='Click here to update your calendar'
              label='Plan Your Day'
              path='/sign-up'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;