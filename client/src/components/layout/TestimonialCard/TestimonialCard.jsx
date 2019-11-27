import React from 'react';
import './_testimonialcard.scss';

const TestimonialCard = ({ url, firstName, content}) => {
    return (
        <>
        <section className="testimonial"> 
            <div className="testimonial--wrapper">
               <img className="testimonial__image" src={url} alt="images"/>

                <div className="testimonial__content">
                    <h3 className="testimonial__content__name">{firstName}</h3>
                    <p className="testimonial__content__content">{content}</p>
                </div>
            </div>
        </section>
        </>
    )
}

export default TestimonialCard;