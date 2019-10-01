import React from 'react';

import Navbar from '../components/core/Navbar'
import Footer from '../components/core/Footer'

import Header from '../components/layout/Header';
import Testimonials from '../components/feature/Testimonials';
import NewsletterForm from '../components/feature/NewsletterForm';
import Quote from '../components/feature/Quote';

class Community extends React.Component {

    componentDidMount() {
        document.title = 'Soundclout | Community'
    }

    render () {
        return (
            <>
            <Navbar 
                logo="Soundclout"
                link_one="Home"
                link_two="Albums"
                link_three="Community"
            />
            <Header title="Join Our Community" subtitle="Subscribe to stay connected, Never miss a beat!" />
            <NewsletterForm />
            <Testimonials />
            <Quote 
                title="There's Strength In Numbers"
                content='"Here Community Matters! We created this network from the ground up with people from all over the globe who come together over the power of music!"'
                author="Tim McKyer"
                position="CEO, Soundclout"
            />
            <Footer />
            </>
        )
    }
}

export default Community;