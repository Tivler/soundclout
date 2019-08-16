import React from 'react';

const AlbumCard = ({ id, url, title, artist, price}) => {
    return (
        <>
            <a className={`album__wrapper--link ${id}`} rel="noopener noreferrer" href={`${url}`} target="_blank">
                <div className="album__wrapper--overlay">
                    <h3 className="album__wrapper__heading">{title} - {artist}</h3>
                    <p className="album__wrapper__description">Price <span>{price}</span></p>
                </div>
            </a>
        </>
    )
}

export default AlbumCard;