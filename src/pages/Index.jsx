import React from 'react';

import Navbar from '../components/core/Navbar'
import Footer from '../components/core/Footer'

import SliderHero from '../components/feature/SliderHero';
import FeaturedAlbums from '../components/feature/FeaturedAlbums';
import SpotlightArtist from '../components/feature/SpotlightArtist';
import Quote from '../components/feature/Quote';

class Index extends React.Component {

    componentDidMount() {
        document.title = 'Soundclout'
    }

    render () {
        return (
        <>
        <Navbar />
        <SliderHero />
        <FeaturedAlbums />
        <SpotlightArtist />
        <Quote 
            title="Find A Sound That Fits You"
            content='"There is something here for everyone! Find your sound, create your own wave find music and a sound that speaks to you. That is why we are here that is what Soundclout is all about."'
            author="Thomas McKyer"
            position="Founder, Soundclout"
        />
        <Footer />
        </>
    )
    }
}

export default Index;