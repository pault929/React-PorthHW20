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
              label='Demo'
              path='https://github.com/VolodymyrBaisa/Project1-Comics-Reader'
              repoPath='https://volodymyrbaisa.github.io/Project1-Comics-Reader/'
              
            />
            <CardItem
              src='images/emeets.png'
              text='Group Project 2 - Find a Meeting or Start one'
              label='Demo'
              path='https://github.com/sabinehutter/eMeets'
              repoPath='https://emeets.herokuapp.com/'
            />
             <CardItem
              src='images/snip.png'
              text='Group Project 3 - UNDER CONSTRUCTION'
              label='Demo'
              path='https://github.com/adilh621/snip-its'
              repoPath='https://snip-its.herokuapp.com/'
              />
            
          </ul>
          <h1>Some of my Code in action!</h1>
          <br></br>
          <ul className='cards__items'>
            <CardItem
              src='images/quizp.JPG'
              text='Take a quiz and test your Coding Knowledge'
              label='Repo'
              path='https://github.com/pault929/Quiz'
              repoPath='https://pault929.github.io/Quiz/'
            />
            <CardItem
              src='images/readme.jpg'
              text='Create a "Read-Me" file'
              label='Repo'
              path='https://github.com/pault929/Can-you-READ-a-READaME'
              repoPath='https://github.com/pault929/Can-you-READ-a-READaME/blob/main/read.md'
            />
            <CardItem
              src='images/sche2.JPG'
              text='Click here to update your calendar'
              label='Repo'
              path='https://github.com/pault929/SchedulerHomeWork'
              repoPath='https://pault929.github.io/SchedulerHomeWork/'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;