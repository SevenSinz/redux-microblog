import React, { Component } from "react";
import { connect } from 'react-redux';
import { getPostsFromAPI } from '../actions/actionCreators';

import BlogCard from "../components/BlogCard";

class AllBlogPosts extends Component {
    static defaultProps = { titleList: [] };

async componentDidMount(){
    await this.props.getPostsFromAPI();
}

render() {
    return this.props.titleList.length ? (
        <div className="AllBlogPosts">
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
        <p className="lead
                        text-danger
                        bg-light
                        borderborder-danger
                        rounded
                        w-50
                        mx-auto">Sorry, no posts exist yet!</p>
        </div>
    );
}
}   

function mapStateToProps(state){
    console.log("state in allBlogPosts, =", state)
  return { 
    titleList: Object.values(state.blogPosts)
  }
}
export default connect(mapStateToProps, { getPostsFromAPI })(AllBlogPosts);
