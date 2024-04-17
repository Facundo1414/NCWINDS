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
            FLY WITH THE BEST <span className="span_yellow">QUALITY</span> AT
            THE BEST <span className="span_yellow">PRICE</span>
          </h1>
        </div>
      </div>
      <div className="searchBar">
        <SearchBar translateStyle={"true"} />
      </div>
    </div>
  );
};

export { Header };