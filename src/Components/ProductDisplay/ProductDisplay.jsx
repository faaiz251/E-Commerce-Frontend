import React from 'react';
import './ProductDisplay.css';
import star_icon from '../Assests/star_icon.png';
import star_dull_icon from '../Assests/star_dull_icon.png';

export const ProductDisplay = (props) => {
    const {product} = props;
  return (
    <div className="productdisplay">
        <div className="productdisplay-left">
            <div className="productdisplay-img-list">
                <img src={product.image} alt="" className="" />
                <img src={product.image} alt="" className="" />
                <img src={product.image} alt="" className="" />
                <img src={product.image} alt="" className="" />
            </div>
            <div className="productdisplay-img">
                <img src={product.image} alt="" className="productdisplay-main-img" />
            </div>
        </div>
        <div className="productdisplay-right">
    <h1>{product.name}</h1>
    <div className="productdisplay-right-star">
        <img src={star_icon} alt="" className="" />
        <img src={star_icon} alt="" className="" />
        <img src={star_icon} alt="" className="" />
        <img src={star_icon} alt="" className="" />
        <img src={star_dull_icon} alt="" className="" />
        <p>(122)</p>
    </div>
        </div>
    </div>
   
  )
}
