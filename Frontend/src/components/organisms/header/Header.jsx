import React from 'react'
import './header.css'
import SearchBar from './SearchBar';

const Header = () => {
    return (
        <div >
            <div className="heroSection">
                <div className="overlay"></div>
                <div className='header_textContainer'>
                    <h1 className='header_text'>FLY WITH THE BEST <span className='span_yellow'>QUALITY</span> AT THE BEST <span className='span_yellow'>PRICE</span></h1>
                </div>
            </div>
            <SearchBar/>

        </div>
    );
};

export default Header