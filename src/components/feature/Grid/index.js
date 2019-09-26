import React from 'react';

import AlbumCard from '../../layout/AlbumCard';
import GridHead from '../GridHead';

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
        fetch('/lowtohigh')
            .then(res => res.json())
            .then(albums => this.setState({ products: albums }))
        console.log('working')
        window.scrollTo(0,600)
    }

    _filterByHighest = () => {
        fetch('/hightolow')
            .then(res => res.json())
            .then(albums => this.setState({ products: albums }))
        console.log('working')
        window.scrollTo(0,600)
    }

    _fitlerAtoZ = () => {
        fetch('/atoz')
            .then(res => res.json())
            .then(albums => this.setState({ products: albums }))
        console.log('working')
        window.scrollTo(0,600)
    }

    _fitlerZtoA = () => {
        fetch('/ztoa')
            .then(res => res.json())
            .then(albums => this.setState({ products: albums }))
        console.log('working')
        window.scrollTo(0,600)
    }

    componentDidMount() {
        fetch('/products')
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