import React from 'react';

import featured from '../featured';

import Slider from '../components/feature/Slider/Slider'
import Featured from '../components/feature/Featured/Featured'
import Quotes from '../components/feature/Quotes/Quotes'
import Spotlight from '../components/feature/Spotlight/Spotlight';

class Index extends React.Component {
    render () {
        return (
        <>
        <Slider />
        <Featured albums={featured} />
        <Spotlight />
        <Quotes />
        </>
    )
    }
}

export default Index;