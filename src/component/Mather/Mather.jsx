import React from 'react';
import Mama from '../Mama/Mama';
import Nana from '../Nana/Nana';
import Aunty from '../Aunty/Aunty';

const Mather = () => {
    return (
        <div>
            <h2>Mather</h2>
            <section className='flex'>
                <Mama></Mama>
                <Nana></Nana>
                <Aunty></Aunty>
            </section>
        </div>
    );
};

export default Mather;