import React, { Component } from 'react';
import { connect } from 'react-redux';
import { savePost, deletePost } from './actions';

import PostFormEditAdd from './PostFormEditAdd';
import CommentAddForm from './CommentAddForm';
import CommentList from './CommentList';

class BlogPost extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isEditing: false,
        }
        this.toggleIsEditing = this.toggleIsEditing.bind(this);
        this.handleDeletePost = this.handleDeletePost.bind(this);
    }

    /** When clicked switches state isEditing between true and false.
     * This will render either the blog post or the blog edit form. */
    toggleIsEditing() {
        this.setState(
            { isEditing: this.state.isEditing ? false : true }
        );
    }

    /** Calls a function in App to remove this post from state. */
    handleDeletePost() {
        this.props.handleDeletePost(this.props.match.params.id);
        this.props.history.push('/');
    }

    showEdit(blogPost) {
        console.log("blogPost inside BLogpost showEdit = ", blogPost)
        return (<div>
            <PostFormEditAdd
                history={this.props.history}
                blogPost={blogPost}
                handleSavePost={this.props.handleSavePost} />
        </div>
        );
    }

    showBlogPost(blogPost) {
        console.log("blogPost inside BLogpost showblogpost = ", blogPost)
        return (<div>
            <button onClick={this.toggleIsEditing}> Edit </button>
            <button onClick={this.handleDeletePost}> Delete </button>
            <div>
                <h2> {blogPost.title} </h2>
                <p> {blogPost.description} </p>
                <p> {blogPost.body} </p>
            </div>
            <CommentList blogPost={blogPost}
                handleSavePost={this.props.handleSavePost} />
            <CommentAddForm blogPost={blogPost}
                handleSavePost={this.props.handleSavePost} />
        </div>
        );
    }

    render() {
        return (
            this.state.isEditing ? this.showEdit(this.props.blogPost) : this.showBlogPost(this.props.blogPost)
        );
    }
}

function mapStateToProps(state, ownProps) {
    return {
        blogPost: state.blogPosts[ownProps.match.params.id]
    }
}

function mapDispatchToProps(dispatch, props) {
    let id = props.match.params.id;
    return { handleDeletePost: () => dispatch(deletePost(id)) }
}

export default connect(mapStateToProps, mapDispatchToProps)(BlogPost);