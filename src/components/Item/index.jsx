import React from 'react';
import './item.css'
import { Link } from 'react-router-dom';
function Item(props) {
    return (
<Link to={`/product/${props.id}`} onClick={()=>{
    window.scrollTo(0,0)
}}>
<div className='item'>
            <img src={props.image} alt="l" />
            <p>{props.name}</p>
            <div className="item-prices">
                <div className="item-price-new">
                    ${props.new_price}
                </div>
               <div className="item-price-old">
               ${props.old_price}
               </div>
            </div>
        </div>
</Link>
    );
}

export default Item;