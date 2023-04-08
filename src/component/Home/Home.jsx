import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Cart from '../Cart/Cart';
import TShirt from '../TShirt/TShirt';
import './Home.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Home = () => {
    const tShirts = useLoaderData();

    const [cart, setCart] = useState([]);

    const handleAdToCart = tShirt => {
        const exists = cart.find(crt => crt._id === tShirt._id);
        if (exists) {
            toast.warn('🦄 Already add!', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
        }
        else {
            const newCart = [...cart, tShirt]
            setCart(newCart)
        }

    }
    const handleRemoveFromCart = (id) => {
        const getCart = cart.filter(ct => ct._id !== id);
        setCart(getCart)
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
            <ToastContainer />
        </div>
    );
};

export default Home;