import React from 'react';

import Navbar from '../components/core/Navbar/Navbar'
import Footer from '../components/core/Footer/Footer'

import albums from '../albums';

import Grid from '../components/feature/Grid/Grid'

class Products extends React.Component {
    render () {
            return (
            <>
            <Navbar />
            <Grid albums={albums} />
            <Footer />
            </>
        )
    }
}

export default Products;