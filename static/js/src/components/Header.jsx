import React from "react";
import PropTypes from "prop-types";

const Header = props => (
  <div>
    <div className="App-header">
      <div className='header__text'>
        <h1 className='title'>Comment Search</h1>
        <h2 className="subtitle">{props.tagline}</h2>
      </div>
      <div className="credits">
        <h3 className="">Built by Cooper Lewis</h3>
        <h3 className="">{props.disclaimer}</h3>
      </div>
    </div>
  </div>
);

Header.propTypes = {
  tagline:PropTypes.string.isRequired
}
export default Header;