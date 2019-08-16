import React from 'react';

import albums from '../../../albums';

import AlbumCard from '../../layout/AlbumCard';
import GridHead from './GridHead';

import './_Grid.scss';
import './_Filter.scss';

class Grid extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            products: []
        };
    }

    _filterByLowest = () => {
        const albums = this.state.products;
        const albumsByLowest = albums.sort((x, y) => {
            return x.price - y.price;
        });
        this.setState({ products: albumsByLowest })
        console.log('filtered by lowest:', albumsByLowest);
    }

    _filterByHighest = () => {
        const albums = this.state.products;
        const albumsByHighest = albums.sort((x, y) => {
            return y.price - x.price;
        });
        this.setState({ products: albumsByHighest })
        console.log('filtered by Highest:', albumsByHighest);
    }

    componentDidMount() {
        this.setState({ products: albums });
    }

    render () {
        return (

        <>
        <GridHead />

        <div className="album">
            <h2 className="album__title">Discover Your Sound</h2>
            <p className="album__description">All the sounds, All the waves find something that fits you</p>

            <div className="album__wrapper">
                {this.state.products.map(p => <AlbumCard id={p.id} key={p.id} url={p.url} title={p.title} artist={p.artist} price={p.price} />)}
            </div>

            <div className="filter">
                <h3 className="filter__title">Filter Albums By Price:</h3>
                <button onClick={this._filterByHighest}className="filter__button filter__button--divider">High To Low</button>
                <button onClick={this._filterByLowest} className="filter__button">Low To High</button>
            </div>
        </div>
        </>

        )
    }
}
 
export default Grid;