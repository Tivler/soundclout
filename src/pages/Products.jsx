import React from 'react';

import Navbar from '../components/core/Navbar'
import Footer from '../components/core/Footer'

import Grid from '../components/feature/Grid'

class Products extends React.Component {

    componentDidMount() {
        document.title = 'Soundclout | albums'
    }
    
    render () {
            return (
            <>
            <Navbar />
            <Grid />
            <Footer />
            </>
        )
    }
}

export default Products;