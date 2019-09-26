import React from 'react';

import './_Featured.scss';
import FeatureCard from '../../layout/FeatureCard';

class Featured extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            products: []
        };
    }

    componentDidMount() {
        fetch('/feature')
            .then(res => res.json())
            .then(albums => this.setState({ products: albums }))
    }

    render () {
        return (
        <div className="featured">
            <h2 className="featured__title">Featured Albums</h2>
            <p className="featured__description">Soundclout has all of your favorite albums right at your fingers</p>

            <div className="featured__wrapper">
                {this.state.products.map(p => <FeatureCard id={p.featured_class} key={p.featured_class}  url={p.featured_url} title={p.featured_title} artist={p.featured_artist} price={p.price}/>)}
            </div>
        </div>
        )
    }
}
 
export default Featured;