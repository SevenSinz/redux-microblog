import React, { Component } from 'react';

// Need: id, title, descriptio, body
// Edit button and Delete button



class BlogPost extends Component {
    
    findBlog() {
        const blogId = this.props.match.params.id;
        return this.props.blogPosts.filter(post => post.id === blogId); 
    }

    render() {
        const blogPost = this.findBlog()[0]
        console.log("What props?", this.props)
        return (
            <div>
                <h2> {blogPost.title} </h2>
                <p> {blogPost.description} </p>
                <p> {blogPost.body} </p>
            </div>
        );
    }
}

export default BlogPost;