import React from 'react';
import Father from '../Father/Father';
import Mather from '../Mather/Mather';
import './Grandpa.css'

const Grandpa = () => {
    return (
        <div className='grandpa'>
            <h2>Grandpa</h2>
            <section className='flex'>
                <Father></Father>
                <Mather></Mather>
            </section>
        </div>
    );
};

export default Grandpa;