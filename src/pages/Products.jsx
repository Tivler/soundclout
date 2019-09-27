import React from 'react';

import Navbar from '../components/core/Navbar'
import Footer from '../components/core/Footer'

import Header from '../components/layout/Header';
import AlbumsGrid from '../components/feature/AlbumsGrid';

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
            <Footer />
            </>
        )
    }
}

export default Products;