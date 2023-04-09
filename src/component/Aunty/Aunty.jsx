import React, { useContext } from 'react';
import { NewContext } from '../Grandpa/Grandpa';

const Aunty = () => {
    const golden = useContext(NewContext)
    return (
        <div>
            <h2>aunty</h2>
            <p><small>{golden}</small></p>
        </div>
    );
};

export default Aunty;