import React from 'react';

// import albums from '../../../albums';

import AlbumCard from '../../layout/AlbumCard';
import GridHead from '../GridHead/GridHead';

import './_Grid.scss';
import '../../partials/_Filter.scss';

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
        window.scrollTo(0,600)
    }

    _filterByHighest = () => {
        const albums = this.state.products;
        const albumsByHighest = albums.sort((x, y) => {
            return y.price - x.price;
        });
        this.setState({ products: albumsByHighest })
        console.log('filtered by Highest:', albumsByHighest);
        window.scrollTo(0,600)
    }

    _fitlerAtoZ = () => {
        const albums = this.state.products;
        const albumsInOrder = albums.sort((x, y) => {
            if (x.album_title < y.album_title) {
                return -1
            }
            if (y.album_title < x.album_title) {
                return 1
            }
            return 0;
        })
        this.setState({ products: albumsInOrder })
        console.log('filtered by Highest:', albumsInOrder);
        window.scrollTo(0,600)
    }

    _fitlerZtoA = () => {
        const albums = this.state.products;
        const albumsInOrder = albums.sort((x, y) => {
            if (x.album_title > y.album_title) {
                return -1
            }
            if (y.album_title > x.album_title) {
                return 1
            }
            return 0;
        })
        this.setState({ products: albumsInOrder })
        console.log('filtered by Highest:', albumsInOrder);
        window.scrollTo(0,600)
    }

    componentDidMount() {
        fetch('http://localhost:3000/products')
            .then(res => res.json())
            .then(albums => this.setState({ products: albums }))
    }

    render () {
        return (

        <>
        <GridHead />

        <div className="album">
            <h2 className="album__title">Discover Your Sound</h2>
            <p className="album__description">All the sounds, All the waves find something that fits you</p>

            <div className="album__wrapper">
                {this.state.products.map(p => <AlbumCard id={p.album_class} key={p.album_class}  url={p.album_url} title={p.album_title} artist={p.album_artist} price={p.price}/>)}
            </div>

            <div className="filter">
                <h3 className="filter__title">Filter Albums</h3>
                <div className="filter--wrapper">
                    <button onClick={this._fitlerAtoZ}className="filter__button">Name From A-Z</button>
                    <button onClick={this._fitlerZtoA}className="filter__button">Name from Z-A</button>
                    <button onClick={this._filterByLowest} className="filter__button">Price Low To High</button>
                    <button onClick={this._filterByHighest}className="filter__button">Price High To Low</button>
                </div>
            </div>
        </div>
        </>

        )
    }
}
 
export default Grid;