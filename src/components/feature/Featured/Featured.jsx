import React from 'react';
import './_Featured.scss';
import FeatureCard from '../../layout/FeatureCard';

class Featured extends React.Component {
    render () {
        const featuredList = this.props.albums.map((album,index) => {
            return (
                <FeatureCard key={index} albums={album}/>
            )
        });

        return (
        <div className="featured">
            <h2 className="featured__title">Featured Albums</h2>
            <p className="featured__description">Soundclout has all of your favorite albums right at your fingers</p>

            <div className="featured__wrapper">
                {featuredList}
            </div>
        </div>
        )
    }
}
 
export default Featured;