import React from 'react';

import './_featuredalbums.scss';
import FeatureCard from '../../layout/FeatureCard';
import ContentHead from '../../layout/ContentHead';

class FeaturedAlbums extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            products: []
        };
    }

    componentDidMount() {
        fetch('/api/featuredalbums')
            .then(res => res.json())
            .then(albums => this.setState({ products: albums }))
    }

    render () {
        return (
        <div className="featured">
            <ContentHead 
                title="Featured Albums"
                desc="Soundclout has all of your favorite albums right at your fingers"
            />

            <div className="featured__wrapper">
                {this.state.products.map(p => <FeatureCard id={p.featured_class} key={p.featured_class}  url={p.featured_url} title={p.featured_title} artist={p.featured_artist} price={p.price}/>)}
            </div>
        </div>
        )
    }
}
 
export default FeaturedAlbums;