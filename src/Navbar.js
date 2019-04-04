import React, { Component } from "react";
import { Link } from "react-router-dom";

class Navbar extends Component {
  render() {
    return <div className="NavBar container">
        <h1>  Microblog  </h1>
        <h4> Get in the Rithm of blogging </h4>
        <Link to="/">Blog</Link>
        <br />
        <Link to="/new">Add a new post</Link>
      </div>;
  }
}

export default Navbar;