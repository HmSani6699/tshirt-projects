import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Cart from '../Cart/Cart';
import TShirt from '../TShirt/TShirt';
import './Home.css';

const Home = () => {
    const tShirts = useLoaderData();

    const [cart, setCart] = useState([]);

    const handleAdToCart = tShirt => {
        const newCart = [...cart, tShirt]
        setCart(newCart)
    }
    const handleRemoveFromCart = (id) => {
        const exists = cart.filter(ct => ct._id !== id);
        setCart(exists)
    }

    return (
        <div className='main-container'>
            <div className='tShirts-container'>
                {
                    tShirts.map(tShirt => <TShirt
                        key={tShirt._id}
                        tShirt={tShirt}
                        handleAdToCart={handleAdToCart}
                    ></TShirt>)
                }
            </div>
            <div className='cart-container'>
                <Cart
                    cart={cart}
                    handleRemoveFromCart={handleRemoveFromCart}
                ></Cart>
            </div>
        </div>
    );
};

export default Home;