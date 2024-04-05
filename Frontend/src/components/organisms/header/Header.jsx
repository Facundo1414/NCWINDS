import React from 'react'
import './header.css'

const Header = () => {
    return (
        <div >
            <div className="heroSection">
                <div className="overlay"></div>
                <div className='header_textContainer'>
                    <h1 className='header_text'>FLY WITH THE BEST <span className='span_yellow'>QUALITY</span> AT THE BEST <span className='span_yellow'>PRICE</span></h1>
                </div>
            </div>
        </div>
    );
};

export default Header