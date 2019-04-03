import React, { Component } from "react";
import { Link } from "react-router-dom";

class BlogCard extends Component {

  render() {
      const { id, title, description } = this.props;
    return (
        <li> 
        <Link to={`/${id}`}> {title} </Link>  
        <p>{description}</p>
        </li>
    )
  }
}

export default BlogCard;
