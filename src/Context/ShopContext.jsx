import React, { createContext, useState } from "react";
import all_product from '../Components/Assests/all_product';

export const ShopContext = createContext(null);

const getDefaultCart = () => {
    let cart = {};
    for (let index = 0; index < all_product.length+1; index++) {
        cart[index] = 0;
    }
    return cart;
}

const ShopContextProvider = (props) => {
    const contextvalue = {all_product};
    const [cartItems,setCartItems] = useState(getDefaultCart());
  
    return (
        <ShopContext.Provider value ={contextvalue}>
            {props.children}
        </ShopContext.Provider>
    )

}

export default ShopContextProvider;