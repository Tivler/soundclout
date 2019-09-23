import React from 'react';

import Navbar from '../components/core/Navbar/Navbar'
import Footer from '../components/core/Footer/Footer'

import featured from '../featured';

import Slider from '../components/feature/Slider/Slider'
import Featured from '../components/feature/Featured/Featured'
import Quotes from '../components/feature/Quotes/Quotes'
import Spotlight from '../components/feature/Spotlight/Spotlight';

class Index extends React.Component {
    render () {
        return (
        <>
        <Navbar />
        <Slider />
        <Featured albums={featured} />
        <Spotlight />
        <Quotes />
        <Footer />
        </>
    )
    }
}

export default Index;