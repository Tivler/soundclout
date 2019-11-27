import React from 'react';

const FeatureCard = ({ id, url, title, artist, price}) => {
    return (
        <>
            <a className={`featured__wrapper--link ${id}`} rel="noopener noreferrer" href={`${url}`} target="_blank">
                <div className="featured__wrapper--overlay">
                    <h3 className="featured__wrapper__heading">{title} - {artist}</h3>
                    <p className="featured__wrapper__description">Price <span>{price}</span></p>
                </div>
            </a>
        </>
    )
}

export default FeatureCard;