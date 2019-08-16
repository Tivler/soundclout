import React from 'react';

import albums from '../albums';

import Grid from '../components/feature/Grid/Grid'

class Products extends React.Component {
    render () {
            return (
            <>
            <Grid albums={albums} />
            </>
        )
    }
}

export default Products;