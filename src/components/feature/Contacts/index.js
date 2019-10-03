import React from 'react';
import './_contacts.scss';

import ContactCard from '../../layout/ContactCard/';

class Contacts extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            contacts: [],
        };
    }

    _displayContacts = () => {
        fetch('/api/contacts')
        .then(res => res.json())
        .then(contact => this.setState({ contacts: contact }))
    }

    componentDidMount() {
        this._displayContacts();
    }

    render () {
        return (

        <>
        <div className="grid">
            {this.state.contacts.map(p => <ContactCard key={p.contact_id} name={p.firstName} email={p.email}  />)}
        </div>
        </>

        )
    }
}
 
export default Contacts;