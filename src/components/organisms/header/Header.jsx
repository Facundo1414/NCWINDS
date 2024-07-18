import React from "react";
import SearchBar  from "../../molecules/searchBar/SearchBar";
import "./header.css";


const Header = () => {
  return (
    <div>
      <div className="heroSection">
        <div className="overlay"></div>
        <div className="header_textContainer">
          <h1 className="header_text">
            VUELA CON LA MEJOR <span className="span_yellow">CALIDAD</span> AL
            MEJOR <span className="span_yellow">PRECIO</span>
          </h1>
        </div>
      </div>
      <div className="searchBar">
        <SearchBar translateStyle={"true"} />
      </div>
    </div>
  );
};

export  {Header} ;