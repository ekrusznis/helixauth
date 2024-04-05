import React from 'react';
import { useLocation } from 'react-router-dom';
import { HashLink as Link } from 'react-router-hash-link';

const MenuItems = (props) => {
    const { parentMenu } = props;
    const location = useLocation();

    return (
        <>
            <li className="current-menu-item menu-item-has-children">
            </li>
            <li>
                <Link className={location.pathname === '/about' ? 'active' : ''} to="/about#">About Us</Link>
            </li>
            <li><Link className={location.pathname === '/contact' ? 'active' : ''} to="/contact#">Contact</Link></li>
        </>
    );
}

export default MenuItems;