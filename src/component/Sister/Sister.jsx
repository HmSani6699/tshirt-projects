import React, { useContext } from 'react';
import { NewContext } from '../Grandpa/Grandpa';

const Sister = () => {
    const golden = useContext(NewContext)
    return (
        <div>
            <h2>Sister</h2>
            <p><small>{golden}</small></p>
        </div>
    );
};

export default Sister;