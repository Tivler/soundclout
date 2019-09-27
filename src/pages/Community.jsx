import React from 'react';

import Navbar from '../components/core/Navbar'
import Footer from '../components/core/Footer'

import Header from '../components/layout/Header';
import Testimonials from '../components/feature/Testimonials';
import NewsletterForm from '../components/feature/NewsletterForm';

class Community extends React.Component {

    componentDidMount() {
        document.title = 'Soundclout | Newsletter'
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
            <Footer />
            </>
        )
    }
}

export default Community;