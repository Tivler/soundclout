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
        fetch('/api/testimonials')
            .then(res => res.json())
            .then(person => this.setState({ people: person }))
    }

    render () {
        return (
            <>
                <ContentHead 
                    title="Hear From Our Community"
                    desc="Here's what the community has to say about Soundclout"
                />

                <div className="testimonial__wrapper">
                {this.state.people.map(p => <TestimonialCard key={p.test_id}  url={p.test_url} firstName={p.test_firstName} content={p.test_content} /> )}
                </div>
            </>
        )
    }
}

export default Testimonials;