import React, { Component } from 'react';

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

    showEdit() {
        console.log("blogPost inside BLogpost showEdit = ", this.props.blogPost)
        return (<div>
            <PostFormEditAdd history={this.props.history}
                blogPost={this.props.blogPost}
                handleSavePost={this.props.handleSavePost} />
            <CommentList blogPost={this.props.blogPost}
                handleSavePost={this.props.handleSavePost} />
            <CommentAddForm blogPost={this.props.blogPost}
                handleSavePost={this.props.handleSavePost} />
            </div>
        );
    }


    showBlogPost() {
        console.log("blogPost inside BLogpost showblogpost = ", this.props.blogPost)
        return (<div>
            <button onClick={this.toggleIsEditing}> Edit </button>
            <button onClick={this.handleDeletePost}> Delete </button>
            <div>
                <h2> {this.props.blogPost.title} </h2>
                <p> {this.props.blogPost.description} </p>
                <p> {this.props.blogPost.body} </p>
            </div>
            <CommentList blogPost={this.props.blogPost}
                handleSavePost={this.props.handleSavePost} />
            <CommentAddForm blogPost={this.props.blogPost}
                handleSavePost={this.props.handleSavePost} />
        </div>
        );
    }

    // componentDidMount(){
    //     this.findBlog();
    // }

    render() {
        // const blogId = this.props.match.params.id;
        // let blogPost = this.props.blogPosts.filter(post => post.id === blogId)[0];
        console.log("blogPost in BlogPost?", this.props.blogPost);

        // let showBlogPost = 

        // let showEdit =  

        console.log("BlogPost state?", this.state);
        return (
            this.state.isEditing ? this.showEdit() : this.showBlogPost()
        );
    }
}

export default BlogPost;