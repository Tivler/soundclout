import React from 'react';
import './_spotlightartist.scss';

const SpotlightArtist = () => {
    return (
        <>
        <div className="spotlight__wrapper">
             <a className="spotlight__wrapper--link post" rel="noopener noreferrer" href="https://www.instagram.com/champagnepapi/?hl=en" target="_blank">
                <div className="spotlight__wrapper--overlay">
                    <h3 className="spotlight_wrapper__heading">Click for more Drake</h3>
                </div>
            </a>

            <div className="spotlight__content">
                <h3 className="spotlight__content__title">Spotlight</h3>
                <h4 className="spotlight__content__artist">Drake</h4>
                <p className="spotlight__content__bio">During his creative peak, from 2011’s Take Care through 2015’s If You’re Reading This It’s Too Late, Drake processed his memory through his music. He plumbed the depths of his skyrocketing stardom, processing it all with a weary stream-of-consciousness. It was almost as if he was rapping names, places, and scenes as a way to remember them. (Never forget Courtney, from Hooters, on Peachtree.) Some songs included snippets of voicemails from irritated girlfriends. Others felt like rhyming notes to self, including one where he spent four minutes apologizing to his mother.</p>
                <a className="spotlight__content__button" rel="noopener noreferrer" href="https://www.instagram.com/champagnepapi/?hl=en" target="_blank">More Drake</a>
            </div>
        </div>
        </>
    )
}

export default SpotlightArtist;