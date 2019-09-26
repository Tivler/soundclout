import React from 'react';

import Navbar from '../components/core/Navbar'
import Footer from '../components/core/Footer'

import Grid from '../components/feature/Grid'
import Header from '../components/layout/Header';

class Products extends React.Component {

    componentDidMount() {
        document.title = 'Soundclout | albums'
    }
    
    render () {
            return (
            <>
            <Navbar />
            <Header title="View our selection of Albums" subtitle="Featured Albums From Your Favorite Artists" />
            <Grid />
            <Footer />
            </>
        )
    }
}

export default Products;