import React from 'react';

import Navbar from '../components/core/Navbar/Navbar'
import Footer from '../components/core/Footer/Footer'

import Form from '../components/feature/Form/Form'

class Contact extends React.Component {
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