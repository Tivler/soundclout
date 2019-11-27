import React from 'react';
import './_Footer.scss';

import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faPhoneAlt } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";

library.add(fab);

const Footer = () => {
    return (
    
    <> 
        <footer className="footer">
            <h2 className="footer__heading">Get In Touch</h2>
            <div className="footer__socials">
                <a className="footer__socials__icon" rel="noopener noreferrer" target="_blank" href="https://www.linkedin.com/in/thomas-mckyer/"><FontAwesomeIcon className="footer__socials__icon--size" icon={['fab' , 'linkedin']} /><span className="footer__socials__label">LinkedIn</span></a>
                <a className="footer__socials__icon divider" rel="noopener noreferrer" target="_blank" href="https://www.instagram.com/tmckyer/"><FontAwesomeIcon className="footer__socials__icon--size" icon={['fab' , 'instagram']} /><span className="footer__socials__label">Instagram</span></a>
                <a className="footer__socials__icon" rel="noopener noreferrer" target="_blank" href="https://github.com/tivler"><FontAwesomeIcon className="footer__socials__icon--size" icon={['fab' , 'github-square']} /><span className="footer__socials__label">Github</span></a>
            </div>

            <nav className="footer__nav">
                <div className="footer__info">
                    <a className="footer__info__icon" href="/"><FontAwesomeIcon className="footer__info__icon--size" icon={faPhoneAlt} /><span className="footer__info__label">(704) 808 8000</span></a>
                    <a className="footer__info__icon footer__info__icon--divider"rel=" noopener noreferrer" target="_blank" href="https://www.google.com/gmail/"><FontAwesomeIcon className="footer__info__icon--size" icon={faEnvelope} /><span className="footer__info__label">information@soundclout.io</span></a>
                    <a className="footer__info__icon" rel="noopener noreferrer" target="_blank" href="https://www.google.com/maps"><FontAwesomeIcon className="footer__info__icon--size" icon={faMapMarkerAlt} /><span className="footer__info__label">123 Somewhere Lit Drive, Charlotte, NC 28277</span></a>
                </div>
            </nav>

            <div className="copyright">
                <p className="copyright__text">Copyright &copy; 2019 Soundclout.io</p>
                <Link to="/contacts" className="copyright__updated">View our contacts</Link>
            </div>
        </footer>
    </>

    )
}

export default Footer;