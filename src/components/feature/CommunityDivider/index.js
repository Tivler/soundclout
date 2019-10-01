import React from 'react';
import './_communitydivider.scss';

import { Link } from 'react-router-dom';

const CommunityDivider = (props) => {

    return (
        <>
            <div className="background">
                <section className="div-content">
                    <h4 className="div-content__title">{props.title}</h4>
                    <p className="div-content__info">{props.info}</p>
                    <Link className="div-content--btn" to={props.path} onClick={props.method}>{props.btn}</Link>
                </section>
            </div>
        </>
    )

}
 
export default CommunityDivider;