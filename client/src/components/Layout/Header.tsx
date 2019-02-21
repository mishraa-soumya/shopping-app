import React from 'react';
import '../../assets/styles/App.css';

export interface HeaderProps {
    cartCount?: number | null;
}

const Header = ({cartCount}: HeaderProps) => (
    <div className="header">
        <div className="logo">Craftly</div>
        <div className="header-right">
            <a className="active" href="#home">Cart {cartCount}</a>
        </div>
    </div>
);

export default Header;