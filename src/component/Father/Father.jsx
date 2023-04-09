import React from 'react';
import Sister from '../Sister/Sister';
import Bother from '../Bother/Bother';
import ME from '../ME/ME';

const Father = ({ ruing }) => {
    return (
        <div>
            <h2>Father</h2>
            <section className='flex'>
                <ME></ME>
                <Sister></Sister>
                <Bother ruing={ruing}></Bother>
            </section>
        </div>
    );
};

export default Father;