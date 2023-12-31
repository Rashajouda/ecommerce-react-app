import React from 'react';
import './offers.css'
import exclucive_image from '../assets/exclusive_image.png'
function Offers(props) {
    return (
        <div className='offers'>
         <div className="offers-left">
            <h1>Exclusive</h1>
            <h1>Offers For You</h1>
            <p>ONLY OB BEST SELLERS PRODUCTS</p>
            <button>Check Now</button>
            </div>
            <div className="offers-right">
                <img src={exclucive_image} alt="efv" />
                </div>   
        </div>
    );
}

export default Offers;