import React, { Component } from "react";

import CommentCard from "./CommentCard";

class CommentList extends Component {
  constructor(props) {
    super(props);
    
    this.deleteComment = this.deleteComment.bind(this);
}

  deleteComment(id){
    let newComments = this.props.blogPost.comments.filter(c => c.id !== id)
    let newBlogPost = { ...this.props.blogPost, comments: newComments };
    this.props.handleSavePost(newBlogPost);
  }

  render() {
    console.log("blogPost in Commentlist?", this.props.blogPost);

    let objNotEmpty = Object.keys(this.props.blogPost).length > 0;

    return (objNotEmpty && this.props.blogPost.comments.length) ? (
      <div className="comments">
        {this.props.blogPost.comments.map((cardData) => (
          <CommentCard
            text={cardData.text}
            id={cardData.id}
            key={cardData.id}
            handleDeleteComment={this.deleteComment}
          />
        ))}
      </div>
    ) : (
        <p className="lead">Sorry, no comments exist yet!</p>
      );
  }
}

export default CommentList;