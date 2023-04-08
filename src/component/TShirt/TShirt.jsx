import React from 'react';
import './TShirt.css';

const TShirt = ({ tShirt, handleAdToCart }) => {
    const { name, price, picture } = tShirt;
    return (
        <div className='t-shirt'>
            <img src={picture} alt="" />
            <h2>{name}r</h2>
            <p>Price : $ {price}</p>
            <button onClick={() => handleAdToCart(tShirt)} className='by-now-btn'>By now</button>
        </div>
    );
};

export default TShirt;