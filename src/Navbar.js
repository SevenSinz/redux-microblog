import React, { Component } from "react";
import { Link } from "react-router-dom";

class Navbar extends Component {
  render() {
    return <div className="NavBar
                           container
                           bg-info
                           text-white
                           rounded">
        <h1>  Microblog  </h1>
        <h4> Get in the Rithm of blogging </h4>
        <Link to="/" className="white-link">Blog</Link>
        <br />
        <Link to="/new">Add a new post</Link>
      </div>;
  }
}

export default Navbar;