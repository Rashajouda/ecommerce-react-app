import React, { useContext } from "react";
import "./productdisplay.css";
import start_icon from "../assets/star_icon.png";
import start_dull_icon from "../assets/star_dull_icon.png";
import { ShopContext } from "../../context/ShopContext";
function ProductDisplay({ product }) {
  const {addToCart} = useContext(ShopContext)
  return (
    <div className="product-display">
      <div className="product-display-left">
        <div className="product-display-img-list">
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
        </div>
        <div className="product-display-img">
          <img
            src={product.image}
            alt=""
            className="product-display-main-img"
          />
        </div>
      </div>
      <div className="product-display-right">
        <h1>{product.name}</h1>
        <div className="product-display-right-stars">
          <img src={start_icon} alt="" />
          <img src={start_icon} alt="" />
          <img src={start_icon} alt="" />
          <img src={start_icon} alt="" />
          <img src={start_dull_icon} alt="" />
          <p>(122)</p>
        </div>
        <div className="product-display-right-prices">
          <div className="product-dispaly-right-price-old">
            ${product.old_price}
          </div>
          <div className="product-dispaly-right-price-new">
            ${product.new_price}
          </div>
        </div>
        <div className="product-display-right-discription">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis
          error repellat quibusdam doloremque quis placeat dolorem voluptas ea,
          quia quod atque sit. Saepe amet rerum nihil, repellendus laudantium
          quibusdam porro.
        </div>
        <div className="product-display-right-size">
            <h1>Select Size</h1>
            <div className="product-display-right-sizes">
                <div>S</div>
                <div>M</div>
                <div>L</div>
                <div>XL</div>
                <div>XXL</div>
            </div>
        </div>
        <button onClick={()=>{
          addToCart(product.id)
        }}>ADD TO CART</button>
        <p className="product-display-right-categroy">
            <span>Category : </span>
            Women , T-shirt ,Crop Top
        </p>
        <p className="product-display-right-categroy">
            <span>Tags : </span>
            Modern , Latest
        </p>
      </div>
    </div>
  );
}

export default ProductDisplay;
