import React from 'react';
import hand_icon from '../assets/hand_icon.png'
import arrow_icon from '../assets/arrow.png'
import hero_img from '../assets/hero_image.png'
import './hero.css';
function Hero(props) {
    return (
        <div className='hero'>
            <div className="hero-left">
                <h2>NEW ARRIVALS ONLY</h2>
              <div>
              <div className="hero-hand-icon">
                    <p>new</p>
                    <img src={hand_icon} alt="" />
                </div>
                <p>collection</p>
                <p>for everyone</p>
              </div>
              <div className="hero-latest-btn">
                <div>Latest Collection</div>
                <img src={arrow_icon} alt="kk" />
              </div>
            </div>
            <div className="hero-right">
                <img src={hero_img} alt='sdv'/>
            </div>
        </div>
    );
}

export default Hero;