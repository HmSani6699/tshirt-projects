import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <nav>
            <h3>T-Shirt</h3>
            <div>
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/review">OrderReview</Link>
            </div>
        </nav>
    );
};

export default Header; 