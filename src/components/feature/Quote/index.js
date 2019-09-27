import React from 'react';
import './_quote.scss';

const Quote = (props) => {
    return (
    <> 
    <section className="quote">
        <div className="quote--wrapper">
            <h2 className="quote__title">{props.title}</h2>
            <p className="quote__content">{props.content}</p>
            <p className="quote__author">{props.author}</p>
            <p className="quote__author--title">{props.position}</p>
        </div>
    </section>
    </>
    )
}

export default Quote;