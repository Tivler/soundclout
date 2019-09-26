import React from 'react';
import './_header.scss';

const Header = (props) => {
    return (
        <>
        <div className="background-image"></div>

        <div className="content">
            <div className="content--wrapper">
                <div className="content__header">
                    <h1 className="content__header__title">{props.title}</h1>
                    <p className="content__header__subtitle">{props.subtitle}</p>
                </div>
            </div>
        </div>
        </>
    )
}

export default Header;