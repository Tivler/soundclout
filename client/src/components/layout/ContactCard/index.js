import React from 'react';
import './_contactcard.scss';

const ContactCard = ({ name , email }) => {
    return (
        <>
        <div className="contact-card">
            <h3 className="contact-card__name">{name}</h3>
            <p className="contact-card__email">{email}</p>
        </div>
        </>
    )
}

export default ContactCard;