import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getAPostFromAPI, savePost, deletePost, deleteComment, showErr, hideErr } from '../actions/actionCreators';

import PostFormEditAdd from './PostFormEditAdd';
import CommentAddForm from '../components/CommentAddForm';
import CommentList from '../components/CommentList';
import Error from "../components/Error";


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
            { ...this.state, isEditing: this.state.isEditing ? false : true }
        );
    }

    /** Calls a function in App to remove this post from state. */
    handleDeletePost() {
        this.props.handleDeletePost(this.props.match.params.id);
        this.props.history.push('/');
    }

    async componentDidMount() {
        console.log("we are in componentDidMount!")
        this.props.getAPostFromAPI(this.props.match.params.id);
    }

    showEdit(blogPost) {
        return (<div>
            <PostFormEditAdd
                history={this.props.history}
                blogPost={blogPost}
                handleSavePost={this.props.handleSavePost} />
        </div>
        );
    }

    showBlogPost(blogPost) {
        console.log("In blog post, blog post =", blogPost);
        return (<div>
            <button onClick={this.toggleIsEditing}> Edit </button>
            <button onClick={this.handleDeletePost}> Delete </button>
            <div>
                <h2> {blogPost.title} </h2>
                <p> {blogPost.description} </p>
                <p> {blogPost.body} </p>
            </div>
            <CommentList blogPost={blogPost}
                handleSavePost={this.props.handleSavePost}
                handleDeleteComment={this.props.handleDeleteComment}
            />
            <CommentAddForm blogPost={blogPost}
                handleSavePost={this.props.handleSavePost} />
        </div>
        );
    }


    render() {
        if (this.props.errorMessage) {
            return <Error history={ this.props.history }/>
        } else if (this.props.loading) {
            return <h1> Page Loading... </h1>
        } else if (this.state.isEditing) {
            return this.showEdit(this.props.blogPost)
        } else {
            return this.showBlogPost(this.props.blogPost)
        }

        // return (

        //     this.props.errorMessage ? <Error /> :
        //     this.props.loading ?  <h1> Page Loading... </h1> : 
        //     this.state.isEditing ? this.showEdit(this.props.blogPost) : 
        //     this.showBlogPost(this.props.blogPost)
        // );
    }
}

function mapStateToProps(state, ownProps) {
    const post = state.blogPosts[ownProps.match.params.id]
    console.log("BlogPost msp", post)
    return {
        blogPost: post,
        loading: state.loading,
        errorMessage: state.errorMessage
    }
}

const mapDispatchToProps = {
    showErr,
    hideErr,
    getAPostFromAPI,
    handledeletePost: deletePost,
    handleSavePost: savePost,
    handleDeleteComment: deleteComment,
}


// function mapDispatchToProps(dispatch, props) {
//     let id = props.match.params.id;
//     return {
//         getAPostFromAPI,
//         handleDeletePost: () => dispatch(deletePost(id)),
//         handleSavePost: (blogPost) => dispatch(savePost(blogPost)),
//         handleDeleteComment: (blogPostId, commentId) => dispatch(deleteComment(blogPostId, commentId)),
//     }
// }

export default connect(mapStateToProps, mapDispatchToProps)(BlogPost);