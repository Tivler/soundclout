import React from 'react';

import Navbar from '../components/core/Navbar'
import Footer from '../components/core/Footer'

import Form from '../components/feature/Form'
import Header from '../components/layout/Header';
import Testimonial from '../components/feature/Testimonial';

class Community extends React.Component {

    componentDidMount() {
        document.title = 'Soundclout | Newsletter'
    }

    render () {
        return (
            <>
            <Navbar />
            <Header title="Join Our Community" subtitle="Subscribe to stay connected, Never miss a beat!" />
            <Form />
            <Testimonial />
            <Footer />
            </>
        )
    }
}

export default Community;