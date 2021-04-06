import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import StyledHeader from '../../styled-components/StyledHeader';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const Header = () => {
    const [isNavActive, setIsNavActive] = useState(false);


    return (    
        <StyledHeader>
            <div  className={`nav-toggler ${isNavActive && 'nav-toggler--active'}`} onClick={() => {setIsNavActive((prev) => !prev)}}>
                <div className="bar"></div>
            </div>

            <h1><Link to="/">Use Er</Link></h1>

            <nav className={`nav ${isNavActive && 'nav--active'}`}>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/product">Product</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/account">Account</Link></li>
                </ul>
            </nav>

            <div className="cart">    
                <span>0</span>           
                <Link to="/cart">
                    <FontAwesomeIcon icon={faShoppingCart} />
                </Link>
            </div>
        </StyledHeader>
    )
}

export default Header