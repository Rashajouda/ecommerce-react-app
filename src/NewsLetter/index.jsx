import React from 'react';
import './newsletter.css'
function NewsLetter(props) {
    return (
        <div className='newsletter'>
            <h1>Get Exclusive Offers On Your Email</h1>
            <p>Subscribe to ourstay updated newsletter to </p>
            <div>
                <input type="email" name="email" placeholder='Your Email id' />
                <button>Subscribe</button>
            </div>
        </div>
    );
}

export default NewsLetter;