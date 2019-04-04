import React, { Component } from 'react';
import PostFormEditAdd from './PostFormEditAdd';

import CommentAddForm from './CommentAddForm';
import CommentList from './CommentList';

// Edit button and Delete button

class BlogPost extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isEditing: false,
            // blogPost: {}
        }
        this.toggleIsEditing = this.toggleIsEditing.bind(this);
        this.handleDeletePost = this.handleDeletePost.bind(this);
    }

    findBlog() {
        console.log("BlogPost props, before setState?", this.props.blogPost);

        const blogId = this.props.match.params.id;
        // let propsblogPost = this.props.blogPosts.filter(post => post.id === blogId)[0];
        // this.setState({ blogPost: propsblogPost })
        return this.props.blogPosts.filter(post => post.id === blogId)[0];
    }

    /** When clicked switches state isEditing between true and false.
     * This will render either the blog post or the blog edit form. */
    toggleIsEditing() {
        this.setState(
            { isEditing: this.state.isEditing ? false : true }
        );
    }

    handleDeletePost() {
        this.props.handleDeletePost(this.state.blogPost.id);
        this.props.history.push('/');
    }

    showEdit() {
        console.log("blogPost inside BLogpost showEdit = ", this.state.blogPost)
        return (
            <div>
                <PostFormEditAdd history={this.props.history}
                    blogPost={this.state.blogPost}
                    handleSavePost={this.props.handleSavePost} />
                <CommentList blogPost={this.state.blogPost}
                    handleSavePost={this.props.handleSavePost} />
                <CommentAddForm blogPost={this.state.blogPost}
                    handleSavePost={this.props.handleSavePost} />
            </div>
        )
    }


    showBlogPost() {
        console.log("blogPost inside BLogpost showblogpost = ", this.state.blogPost)
        return (
            <div>
                <button onClick={this.toggleIsEditing}> Edit </button>
                <button onClick={this.handleDeletePost}> Delete </button>
                <div>
                    <h2> {this.state.blogPost.title} </h2>
                    <p> {this.state.blogPost.description} </p>
                    <p> {this.state.blogPost.body} </p>
                </div>
                <CommentList blogPost={this.state.blogPost}
                    handleSavePost={this.props.handleSavePost} />
                <CommentAddForm blogPost={this.state.blogPost}
                    handleSavePost={this.props.handleSavePost} />
            </div>
        )
    }

    componentDidMount(){
        this.findBlog();
    }

    render() {

        console.log("blogPost in BlogPost?", this.state.blogPost);
        console.log("BlogPost state?", this.state);
        return (
            this.state.isEditing ? this.showEdit() : this.showBlogPost()
        );
    }
}

export default BlogPost;