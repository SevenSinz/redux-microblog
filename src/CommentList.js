import React, { Component } from "react";

import CommentCard from "./CommentCard";

class CommentList extends Component {

  render() {
    let objNotEmpty = Object.keys(this.props.blogPost).length > 0;

    return (objNotEmpty && this.props.blogPost.comments.length) ? (
      <div className="comments">
        {this.props.blogPost.comments.map((postComment) => (
          <CommentCard
            text={postComment.text}
            blogPostId={this.props.blogPost.id}
            commentId={postComment.commentId}
            key={postComment.id}
            handleDeleteComment={this.props.handleDeleteComment.bind(this, this.props.blogPost.id, postComment.commentId)}
          />
        ))}
      </div>
    ) : (
        <p className="lead">Sorry, no comments exist yet!</p>
      );
  }
}

export default CommentList;