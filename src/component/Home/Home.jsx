import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Cart from '../Cart/Cart';
import TShirt from '../TShirt/TShirt';
import './Home.css';

const Home = () => {
    const tShirts = useLoaderData();

    const [cart, setCart] = useState([]);

    const handleAdToCart = tShirt => {

        console.log(tShirt)
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
                <Cart></Cart>
            </div>
        </div>
    );
};

export default Home;