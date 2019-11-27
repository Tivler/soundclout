import React from 'react';
import './_header.scss';

const Header = (props) => {
    return (
        <>
        <div className="background-image"></div>
     
        <header className="header">
            <h1 className="header__title">{props.title}</h1>
            <p className="header__subtitle">{props.subtitle}</p>
        </header>

        </>
    )
}

export default Header;