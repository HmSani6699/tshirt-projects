import React, { useContext } from 'react';
import { AuthorFather } from '../Father/Father';

const ME = () => {
    const [amount, setAmount] = useContext(AuthorFather);
    return (
        <div>
            <h2> ISMe</h2>
            <p>Amount{amount}</p>
            <button onClick={() => setAmount(amount + 100)}>Increment</button>
        </div>
    );
};
export default ME;