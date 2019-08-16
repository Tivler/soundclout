import React from 'react';
import './_Navbar.scss';

import { NavLink } from 'react-router-dom';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (

    <nav className="nav">

        <input type="checkbox" id="nav" className="nav--hidden"></input>
        <div className="nav__menu--wrapper">
            <label htmlFor="nav" className="nav__menu--button">
                <i></i>
                <i></i>
                <i></i> 
            </label>
        </div>

        <div className="nav__logo--wrapper">
            <Link to="/" className="nav__logo__text">Soundclout</Link>
        </div>

        <div className="nav__list--wrapper">
            <ul className="nav__list__ul">
                <li className="nav__list__ul--item"><NavLink className="nav__list__ul--link" exact to="/">Home</NavLink></li>
                <li className="nav__list__ul--item"><NavLink className="nav__list__ul--link" to="/products">Albums</NavLink></li>
                <li className="nav__list__ul--item"><NavLink className="nav__list__ul--link" to="/contacts">Contact</NavLink></li>
            </ul>
        </div>

    </nav>

    )
}

export default Navbar;