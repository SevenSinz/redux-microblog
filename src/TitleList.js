import React, { Component } from "react";
import BlogCard from "./BlogCard";

class TitleList extends Component {
    static defaultProps = { titleList: [] };

    render() {
    return this.props.titleList.length ? (
        <div className="TitleList">
          {this.props.titleList.map((cardData) => (
            <BlogCard
              title={cardData.title}
              description={cardData.description}
              key={cardData.id}
              id={cardData.id}
            />
          ))}
        </div>
      ) : (
        <p className="lead">Sorry, no post exist yet!</p>
      );
  }
}

export default TitleList;
