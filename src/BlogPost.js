import React, { Component } from 'react';
import PostFormEditAdd from './PostFormEditAdd';

// Edit button and Delete button

class BlogPost extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isEditing: false,
            blogPost: this.findBlog()[0]
        }
        this.toggleIsEditing = this.toggleIsEditing.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
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

    showEdit(){
        return (
            <PostFormEditAdd history={ this.props.history }
                            blogPost={ this.state.blogPost } 
                            handleSave={ this.props.handleSave } />
        )
    }

    handleDelete(){
        this.props.handleDelete(this.state.blogPost.id);
        this.props.history.push('/');
    }

    showBlogPost(){
        return(
            <div>
                <button onClick={this.toggleIsEditing}> Edit </button>
                <button onClick={this.handleDelete}> Delete </button>
                <div>
                    <h2> {this.state.blogPost.title} </h2>
                    <p> {this.state.blogPost.description} </p>
                    <p> {this.state.blogPost.body} </p>
                </div>
            </div>
        )
    }



    render() {
        const blogPost = this.findBlog()[0]

        console.log("blogPost in BlogPost?", blogPost);
        console.log("BlogPost props?", this.props);
        console.log("BlogPost state?", this.state);
        return (
            this.state.isEditing ? this.showEdit() : this.showBlogPost()
        );
    }
}

export default BlogPost;