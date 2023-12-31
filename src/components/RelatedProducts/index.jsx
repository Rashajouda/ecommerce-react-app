import React from 'react';
import './relatedproducts.css'
import data_products from'../assets/data'
import Item from '../Item';
function RelatedProducts(props) {
    return (
        <div className='related-products'>
          <h1>Realted Products</h1>  
          <hr />
          <div className="related-products-item">
            {data_products.map((item,index)=>{
                return <Item               key={index}
                id={item.id}
                name={item.name}
                image={item.image}
                new_price={item.new_price}
                old_price={item.old_price}/>
            })}
          </div>
        </div>
    );
}

export default RelatedProducts;