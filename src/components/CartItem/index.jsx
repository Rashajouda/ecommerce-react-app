import React, { useContext } from 'react';
import remove_icon from '../assets/cart_cross_icon.png'
import '../CartItem/cartitems.css'
import { ShopContext } from '../../context/ShopContext';
function CartItem(props) {
    const {getTotalCartAmount,all_products,cartItem,removeFromCart} = useContext(ShopContext)
    return (
        <div className='cart-items'>
            <div className="cart-items-format-main">
                <p>Products</p>
                <p>Title</p>
                <p>Price</p>
                <p>Quantity</p>
                <p>Total</p>
                <p>Remove</p>
            </div>
            <hr />
           {all_products.map((item)=>{
                if(cartItem[item.id]>0){
                    return  <div>
                    <div className="cart-items-format cart-items-format-main">
                        <img src={item.image} alt=""  className='cart-icon-product-icon'/>
                        <p>{item.name}</p>
                        <p>${item.new_price}</p>
                        <button className='cart-items-quantity'>{cartItem[item.id]}</button>
                        <p>${item.new_price*cartItem[item.id]}</p>
                        <img  className="remove"src={remove_icon} onClick={()=>{
                            removeFromCart(item.id)
                        }} alt="" />
                    </div>
                    <hr />
                </div>
                } else {
                    return null
                }
           })}
           <div className="cart-items-down">
            <div className="cart-items-total">
                <h1>cart Total</h1>
                <div>
                    <div className="cart-item-total">
                        <p>Subtotal</p>
                        <p>${getTotalCartAmount()}</p>
                    </div>
                    <hr />
                    <div className="cart-item-total">
                       <p>Shipping Free</p> 
                       <p>Free</p>
                    </div>
                    <hr />
                    <div className="cart-item-total">
                        <h3>Total</h3>
                        <h3>${getTotalCartAmount()}</h3>
                    </div>
                </div>
                <button>PROCEED TO CHECHOUT</button>
            </div>
            <div className="cart-items-promocode">
               <p>If you bhave promo code, enter it here</p> 
               <div className="cart-items-promobox">
                <input type="text" placeholder='Promo code'/>
               <button>Submit</button>
               </div>
            </div>
           </div>
        </div>
    );
}

export default CartItem;