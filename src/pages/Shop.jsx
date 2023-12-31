import React from 'react';
import Hero from '../components/Hero';
import Popular from '../components/Popular';
import Offers from '../components/Offers';
import NewCollection from '../components/NewCollection';
import NewsLetter from '../NewsLetter';

function Shop(props) {
    return (
        <div style={{
            overflowX:'hidden'
        }}>
           <Hero/>
           <Popular/>
           <Offers/>
           <NewCollection/>
           <NewsLetter/>
           
        </div>
    );
}

export default Shop;