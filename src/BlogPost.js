import React, { Component } from 'react';

// Edit button and Delete button



class BlogPost extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isEditing: false
        }
        this.toggleIsEditing = this.toggleIsEditing.bind(this);
    }
    
    findBlog() {
        const blogId = this.props.match.params.id;
        return this.props.blogPosts.filter(post => post.id === blogId); 
    }

    /** When clicked switches state isEditing between true and false.
     * This will render either the blog post or the blog edit form. */
    toggleIsEditing() {
        this.setState(
            { isEditing: this.state.isEditing ? false : true }
        );
    }

    render() {
        const blogPost = this.findBlog()[0]
        console.log("What props?", this.props);
        console.log("What is state?", this.state);
        return (
            <div>
                <button onClick={this.toggleIsEditing}> Edit </button>
                <button onClick={this.props.handleDelete}> Delete </button>
                <div>
                    <h2> {blogPost.title} </h2>
                    <p> {blogPost.description} </p>
                    <p> {blogPost.body} </p>
                </div>
            </div>
        );
    }
}

export default BlogPost;