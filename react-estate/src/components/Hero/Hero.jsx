import React from 'react';
import '../../App.css';
import Button from '../Button/Button';
import './Hero.css';
import myVideo from '../../assets/videos/video-1.mp4';




const Hero = () => {
  return (
    <section className='hero-container'>
      <video src={myVideo} autoPlay loop muted />
      <h1>YOUR VILLA IS CALLING YOU</h1>
      <p>Move your butt and Get one</p>
      <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          GET STARTED
        </Button>
        <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          onClick={console.log('hey')}
        >
          WATCH TRAILER <i className='far fa-play-circle' />
        </Button>
      </div>
    </section>
  );
}

export default Hero;