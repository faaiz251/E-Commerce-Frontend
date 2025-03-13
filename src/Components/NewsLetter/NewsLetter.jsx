import React from 'react';
import './NewsLetter.css';

export const NewsLetter = () => {
  return (
    <div className="newsletter">
        <h1>Get Exclusive Offers On Your Email</h1>
        <p>SUbscribe to our newLetter and stay updated</p>
        <div>
            <input type='email' placeholder='Your Email ID'></input>
            <button>Subscribe</button>
        </div>
    </div>
)
}
