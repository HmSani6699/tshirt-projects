import React from 'react';
import Father from '../Father/Father';
import Mather from '../Mather/Mather';
import './Grandpa.css'

const Grandpa = () => {
    const ruing = 'golden'
    return (
        <div className='grandpa'>
            <h2>Grandpa</h2>
            <section className='flex'>
                <Father ruing={ruing}></Father>
                <Mather></Mather>
            </section>
        </div>
    );
};

export default Grandpa;