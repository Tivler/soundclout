import React from 'react';

import Navbar from '../components/core/Navbar'
import Header from '../components/layout/Header';
import Contacts from '../components/feature/Contacts';

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
            <Header title="Contacts" subtitle="Contacts API" />
            <Contacts />
            </>
        )
    }
}

export default Community;