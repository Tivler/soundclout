import React from 'react';
import './_Navbar.scss';

import { NavLink } from 'react-router-dom';
import { Link } from 'react-router-dom';

class Navbar extends React.Component {

    checked() {
        if (document.querySelector("#nav").checked === true) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'visible';
        }
    }

    componentDidMount() {
        document.body.style.overflow = 'visible';
    }

    render () {
        return (

        <nav className="nav">

            <input type="checkbox" id="nav" className="nav--hidden" onClick={this.checked}></input>
            <div className="nav__menu--wrapper">
                <label htmlFor="nav" className="nav__menu--button">
                    <i className="nav__menu--icon"></i>
                    <i className="nav__menu--icon"></i>
                    <i className="nav__menu--icon"></i> 
                </label>
            </div>

            <div className="nav__logo--wrapper">
                <Link to="/" className="nav__logo__text">Soundclout</Link>
            </div>

            <div className="nav__list--wrapper">
                <ul className="nav__list">
                    <li className="nav__list--item"><NavLink onClick={() => window.scrollTo(0,0)} className="nav__list--link" exact to="/">Home</NavLink></li>
                    <li className="nav__list--item"><NavLink onClick={() => window.scrollTo(0,0)} className="nav__list--link" to="/products">Albums</NavLink></li>
                    <li className="nav__list--item"><NavLink onClick={() => window.scrollTo(0,0)} className="nav__list--link" to="/contacts">Contact</NavLink></li>
                </ul>
            </div>

        </nav>

        )
    }
}

export default Navbar;