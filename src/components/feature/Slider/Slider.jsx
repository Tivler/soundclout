import React from 'react';
import './_Slider.scss';

import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

class Slider extends React.Component {
   
    render () {
        let index = 2;

        const handleClick = (slide) => {
            if (slide === -1) {
                let slide = document.querySelectorAll('.slider--wrapper')
                slide[index].style.opacity = 0;
                
                if(index === 0) {
                    index = 3
                }

            index--;
            slide[index].style.opacity = 1;
            
            } else if (slide === 1) {
                let slide = document.querySelectorAll('.slider--wrapper')
                slide[index].style.opacity = 0;
      
      
                if(index === 2) {
                    index = -1
                }

            index++;
            slide[index].style.opacity = 1;
          }
      
        }
        
        return (

        <>
            <div className="slider">
                
                <div className="slider--wrapper">
                    <div className="slider__header">
                        <h1 className="slider__header__title">Find your own sound.</h1>
                        <p className="slider__header__subtitle">Using Soundclout is a sure way to find a sound that fits you and your personality</p>
                    </div>
                </div>
                <div className="slider--wrapper">
                    <div className="slider__header">
                    <h1 className="slider__header__title">Stay connected</h1>
                    <p className="slider__header__subtitle">Stay connected with Soundclout by subscribing to our newsletter</p>
                    <Link className="slider__header__button" to="/contacts">Subscribe</Link>
                    </div>
                </div>

                <div className="slider--wrapper slider--wrapper--current ">
                    <div className="slider__header">
                        <h1 className="slider__header__title">A sound for everyone.</h1>
                        <p className="slider__header__subtitle">Millions of songs, when you need to get away.</p>
                        <Link className="slider__header__button" to="/products">View Albums</Link>
                    </div>
                </div>
            </div>

            <div className="slider__arrows--wrapper">
                <button className="slider__arrows--mod arrow-previous" onClick={() => handleClick(-1)}><FontAwesomeIcon icon={faArrowLeft} /></button>
                <button className="slider__arrows--mod arrow-next" onClick={() => handleClick(1)}><FontAwesomeIcon icon={faArrowRight} /></button>
            </div>
        </>

        )
    }
}

export default Slider;