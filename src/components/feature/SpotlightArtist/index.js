import React from 'react';
import './_spotlightartist.scss';

import ContentHead from '../../layout/ContentHead';

const SpotlightArtist = (props) => {
    return (
        <>
        <ContentHead 
            title="Spotlight Artist"
            desc="Checkout more from our Soundclout Spotlight Artist"
        />

        <div className="spotlight__wrapper">
             <a className={`spotlight__wrapper--link ${props.class}`} rel="noopener noreferrer" href={props.link} target="_blank">
                <div className="spotlight__wrapper--overlay">
                    <h3 className="spotlight_wrapper__heading">{props.overlay}</h3>
                </div>
            </a>

            <div className="spotlight__content">
                <h4 className="spotlight__content__artist">{props.artist}</h4>
                <p className="spotlight__content__bio">{props.bio}</p>
                <a className="spotlight__content__button" rel="noopener noreferrer" href={props.link} target="_blank">{props.btn}</a>
            </div>
        </div>
        </>
    )
}

export default SpotlightArtist;