import React from 'react';

const Features = (props) => {
    return (
        <>
            <a className={`featured__wrapper--link ${props.albums.id}`} rel="noopener noreferrer" href={`${props.albums.url}`} target="_blank">
                <div className="featured__wrapper--overlay">
                    <h3 className="featured__wrapper__heading">{props.albums.title} - {props.albums.artist}</h3>
                    <p className="featured__wrapper__description">Price <span>{props.albums.price}</span></p>
                </div>
            </a>
        </>
    )
}

export default Features;