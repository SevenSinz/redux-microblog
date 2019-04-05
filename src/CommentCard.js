import React, { Component } from "react";

class CommentCard extends Component {
    constructor(props) {
        super(props);
        this.handleDeleteComment = this.handleDeleteComment.bind(this);
    }

handleDeleteComment(){
    this.props.handleDeleteComment(this.props.blogPostId, this.props.commentId)
}

    render() {
        return (
            <div>
                <li>
                    {this.props.text}
                </li>
                <button onClick={this.handleDeleteComment}> X </button>
            </div>
    )
    }
}

export default CommentCard;
