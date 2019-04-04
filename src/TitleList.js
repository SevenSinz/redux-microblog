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
        <div>
          <p className="lead text-danger bg-light rounded w-50 mx-auto">Sorry, no posts exist yet!</p>
        </div>
    );
  }
}

export default TitleList;
