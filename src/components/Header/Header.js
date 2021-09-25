import React from 'react';
import logo from '../../images/logo.png';
import './Header.css';

const Header = () => {
    return (
        <>
            <div className="img-head">
                <img src={logo} alt="" />
            </div><div className="header">
                <nav >
                    <a href="/shope">Shop</a>
                    <a href="/order">Order Review</a>
                    <a href="/manage">Manage Inventory Here</a>
                </nav>

            </div></>
    );
};

export default Header;