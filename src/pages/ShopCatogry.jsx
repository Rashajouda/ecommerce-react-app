import React, { useContext } from "react";
import "./CSS/shopcatogry.css";
import { ShopContext } from "../context/ShopContext";
import dropdown_icon from "../components/assets/dropdown_icon.png";
import Item from "../components/Item";
function ShopCatogry({ catogry, banner }) {
  const { all_products } = useContext(ShopContext);
  console.log(all_products);
  return (
    <div className="shop-catogry">
      <img src={banner} alt="ve"  className="shopcatogry-banner"/>
      <div className="shopcatogry-indexSort">
        <p>
          <span>Showing 1-12</span> out of 36 products
        </p>
        <div className="shopcatogry-sort">
          Sort by <img src={dropdown_icon} alt="vsf" />
        </div>
      </div>
     
      <div className="shopcatogry-products">
        {all_products.map((item, index) => {
          if (catogry === item.category) {
            return (
              <Item
                key={index}
                id={item.id}
                name={item.name}
                image={item.image}
                new_price={item.new_price}
                old_price={item.old_price}
              />
            );
          } else {
            return null;
          }
        })}
      </div>
      <div className="shopcatogry-loadmore">
        Explore More
      </div>
    </div>
  );
}

export default ShopCatogry;
