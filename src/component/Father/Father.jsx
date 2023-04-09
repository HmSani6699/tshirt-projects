import React, { createContext, useState } from 'react';
import Sister from '../Sister/Sister';
import Bother from '../Bother/Bother';
import ME from '../ME/ME';

export const AuthorFather = createContext(0);

const Father = ({ ruing }) => {
    const [amount, setAmount] = useState(0)
    return (
        <div>
            <h2>Father</h2>
            <p>Father amount :{amount}</p>
            <AuthorFather.Provider value={[amount, setAmount]}>
                <section className='flex'>
                    <ME></ME>
                    <Sister></Sister>
                    <Bother ruing={ruing}></Bother>
                </section>
            </AuthorFather.Provider>
        </div>
    );
};

export default Father;