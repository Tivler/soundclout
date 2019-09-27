import React from 'react';
import './_testimonials.scss';

import TestimonialCard from "../../layout/TestimonialCard/TestimonialCard";
import ContentHead from '../../layout/ContentHead';

class Testimonials extends React.Component {
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
                <ContentHead 
                    title="Some Success Stories"
                    desc="Here's what the community has to say about Soundclout"
                />

                <div className="testimonial__wrapper">
                {this.state.people.map(p => <TestimonialCard key={p.contact_id}  url={p.contact_url} firstName={p.contact_firstName} content={p.contact_content} /> )}
                </div>
            </>
        )
    }
}

export default Testimonials;