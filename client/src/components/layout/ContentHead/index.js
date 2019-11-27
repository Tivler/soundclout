import React from 'react';
import './_contenthead.scss';

const ContentHead = (props) => {
    return (
        <>
        <div className="content-head">
            <h2 className="content-head__title">{props.title}</h2>
            <p className="content-head__description">{props.desc}</p>
        </div>
        </>
    )
}

export default ContentHead;