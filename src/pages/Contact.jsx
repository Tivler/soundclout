import React from 'react';

import Navbar from '../components/core/Navbar'
import Footer from '../components/core/Footer'

import Form from '../components/feature/Form'

class Contact extends React.Component {

    componentDidMount() {
        document.title = 'Soundclout | Newsletter'
    }

    render () {
        return (
        <>
        <Navbar />
        <Form />
        <Footer />
        </>
    )
    }
}

export default Contact;