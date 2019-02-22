import React from 'react';
import '../../assets/styles/App.css';
import cartIcon from './shopping_cart-128.png';
import logo from './logo.jpg';

export interface HeaderProps {
    cartCount?: number | null;
}

const Header = ({cartCount}: HeaderProps) => (
    <div className="header">
        <div className="header-top">
            <div className="logo"><img src={logo}/></div>
            <div className="header-right">
                <div className="cartIcon">
                <img src={cartIcon} />
                <span>{cartCount}</span>
                </div>
            </div>
        </div>
        <nav className="navbarMenuWrapper">
            <div><a href="/">Home</a></div>
            <div><a href="/about">About US</a></div>
            <div><a href="/contactus">Contact US</a></div>
        </nav>
    </div>
);

export default Header;