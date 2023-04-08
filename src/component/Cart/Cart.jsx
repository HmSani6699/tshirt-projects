import React from 'react';

const Cart = ({ cart, handleRemoveFromCart }) => {
    return (
        <div>
            <h2>Order summary : {cart.length}</h2>
            {
                cart.map(ct => <p>{ct.name}
                    <button onClick={() => handleRemoveFromCart(ct._id)}>X</button>
                </p>)
            }
        </div>
    );
};

export default Cart;