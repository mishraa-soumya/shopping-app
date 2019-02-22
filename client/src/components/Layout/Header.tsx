import React from 'react';
import '../../assets/styles/App.css';

import cartIcon from './shopping_cart-128.png';

export interface HeaderProps {
    cartCount?: number | null;
}

const Header = ({cartCount}: HeaderProps) => (
    <div className="header">
        <div className="logo">Craftly</div>
        <div className="header-right">
            <div className="cartIcon">
            <img src={cartIcon} />
            <span>{cartCount}</span>
            </div>
        </div>
    </div>
);

export default Header;