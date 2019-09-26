import React from 'react';

import Navbar from '../components/core/Navbar'
import Footer from '../components/core/Footer'

import Slider from '../components/feature/Slider'
import Featured from '../components/feature/Featured'
import Quotes from '../components/feature/Quotes'
import Spotlight from '../components/feature/Spotlight';

class Index extends React.Component {

    componentDidMount() {
        document.title = 'Soundclout'
    }

    render () {
        return (
        <>
        <Navbar />
        <Slider />
        <Featured />
        <Spotlight />
        <Quotes />
        <Footer />
        </>
    )
    }
}

export default Index;