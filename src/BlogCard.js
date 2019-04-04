import React, { Component } from "react";
import { Link } from "react-router-dom";

class BlogCard extends Component {

  render() {
      const { id, title, description } = this.props;
    return (
        <li className="container border-primary rounded"> 
          <Link to={`/${id}`}> {title} </Link>  
          <p>{description}</p>
        </li>
    )
  }
}

export default BlogCard;
