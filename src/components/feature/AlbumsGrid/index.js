import React from 'react';

import AlbumCard from '../../layout/AlbumCard';
import ContentHead from '../../layout/ContentHead';

import './_albumsgrid.scss';
import '../../partials/_Filter.scss';

class AlbumsGrid extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            products: [],
            search: ''
        };
    }

    _filterByLowest = () => {
        fetch('/pricelowtohigh')
            .then(res => res.json())
            .then(albums => this.setState({ products: albums }))
        console.log('working')
        window.scrollTo(0,600)
    }

    _filterByHighest = () => {
        fetch('/pricehightolow')
            .then(res => res.json())
            .then(albums => this.setState({ products: albums }))
        console.log('working')
        window.scrollTo(0,600)
    }

    _fitlerAtoZ = () => {
        fetch('/namefromatoz')
            .then(res => res.json())
            .then(albums => this.setState({ products: albums }))
        console.log('working')
        window.scrollTo(0,600)
    }

    _fitlerZtoA = () => {
        fetch('/namefromztoa')
            .then(res => res.json())
            .then(albums => this.setState({ products: albums }))
        console.log('working')
        window.scrollTo(0,600)
    }

    _handleSearch = (e) => {
        this.setState({
            search: e.target.value
        })

        if (!e.target.value) {
            this._displayAlbums();
            return
        }
    }

    _displayAlbums = () => {
        fetch('/albums')
        .then(res => res.json())
        .then(albums => this.setState({ products: albums }))
    }

    componentDidMount() {
        this._displayAlbums();
    }

    render () {
        return (

        <>

        <ContentHead 
            title="Discover Your Sound"
            desc="All the sounds, All the waves find something that fits you"
        />

        <section className="search">
            <input className="search__input" type="text" placeholder="Search For An Album" onChange={this._handleSearch} value={this.state.search} ></input>
        </section>
        
        <div className="album">
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
 
export default AlbumsGrid;