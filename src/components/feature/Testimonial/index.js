import React from 'react';
import './_testimonial.scss';

import TestimonialCard from "../../layout/TestimonialCard/TestimonialCard";

class Testimonial extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            people: []
        };
    }

    componentDidMount() {
        fetch('/contacts')
            .then(res => res.json())
            .then(person => this.setState({ people: person }))
    }

    render () {
        return (
            <>
                <div className="th">
                    <h2 className="th__title">Some Success Stories</h2>
                    <p className="th__description">Here's what the community has to say about Soundclout</p>
                </div>

                <div className="testimonial__wrapper">
                {this.state.people.map(p => <TestimonialCard key={p.contact_id}  url={p.contact_url} firstName={p.contact_firstName} content={p.contact_content} /> )}
                </div>
            </>
        )
    }
}

export default Testimonial;