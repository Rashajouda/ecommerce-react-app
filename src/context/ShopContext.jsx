import React, { createContext, useState } from "react";
import all_products from '../components/assets/all_product'
export const ShopContext = createContext(null)
const getDefaultCart = ()=>{
    let cart = {};
    for(let index =0;index < all_products.length+1;index++) {
       cart[index]  = 0
    }
    return cart;
}
const ShopContectProvider = ({children})=>{
    const [cartItem,setCartItem] = useState(()=>getDefaultCart())
    const addToCart = (itemId)=>{
        setCartItem((prev)=>({...prev,[itemId]:prev[itemId]+1}))
    }
    const removeFromCart = (itemId)=>{
        setCartItem((prev)=>({...prev,[itemId]:prev[itemId]-1}))
    }
    const getTotalCartItems =()=>{
        let totalItems = 0;
        for(let item in cartItem){
            if(cartItem[item] >0){
                totalItems += cartItem[item];
            }
    }
    return totalItems;
}
    const getTotalCartAmount = ()=>{
        let totalAmount = 0;
        for(const item in cartItem){
            if(cartItem[item] > 0){
                let itemInfo = all_products.find((product)=>+product.id===Number(item))
                totalAmount += (itemInfo.new_price * cartItem[item]);
            }
        }
        return totalAmount
        
    
}

    const contextValue = {getTotalCartItems,getTotalCartAmount,all_products,cartItem,addToCart,removeFromCart}
    return <ShopContext.Provider value={contextValue}>
        {children}
    </ShopContext.Provider>

}

export default ShopContectProvider