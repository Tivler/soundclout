import React from 'react';

import Navbar from '../components/core/Navbar'
import Footer from '../components/core/Footer'

import Header from '../components/layout/Header';
import AlbumsGrid from '../components/feature/AlbumsGrid';
import SpotlightArtist from '../components/feature/SpotlightArtist';
import CommunityDivider from '../components/feature/CommunityDivider';

class Products extends React.Component {

    componentDidMount() {
        document.title = 'Soundclout | albums'
    }
    
    render () {
            return (
            <>
            <Navbar 
                logo="Soundclout"
                link_one="Home"
                link_two="Albums"
                link_three="Community"
            />
            <Header title="View our selection of Albums" subtitle="Featured Albums From Your Favorite Artists" />
            <AlbumsGrid />
            <CommunityDivider
                image="/images/divider3.jpg"
                title="be apart of our community"
                info="Join our community to stay connected with Soundclout"
                path="/community"
                btn="Subscribe"
                method={() => window.scrollTo(0, 450)}
            />
            <SpotlightArtist 
                class="meek"
                link="https://www.instagram.com/meekmill/"
                overlay="Click for more Meek Mill"
                artist="Meek Mill"
                bio="Robert Rihmeek Williams, better known as Meek Mill, is a popular American hip-hop recording artist 
                who embarked on his musical journey through rap battles and today he is one of the richest and popular musicians.
                His rap group ‘The Bloodhoundz’ became a rage in the rap battle circles across America and Meek achieved quite a name 
                in the early phases of his career owing to his rap group. The first big break for Mill came in 2008 when he signed a deal 
                for his very first recording by the Atlanta based rapper T.I. Meek made several switches in his career from label to label 
                in order to find the best workplace and creative freedom."
                btn="More Meek Mill"
            />
            <Footer />
            </>
        )
    }
}

export default Products;