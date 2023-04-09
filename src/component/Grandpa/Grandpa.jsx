import React, { createContext } from 'react';
import Father from '../Father/Father';
import Mather from '../Mather/Mather';
import './Grandpa.css';

export const NewContext = createContext();

const Grandpa = () => {
    const ruing = 'golden'
    return (
        <div className='grandpa'>
            <h2>Grandpa</h2>
            <NewContext.Provider value='golden ring ami onek vallobasi'>
                <section className='flex'>
                    <Father ruing={ruing}></Father>
                    <Mather></Mather>
                </section>
            </NewContext.Provider>
        </div>
    );
};

export default Grandpa;