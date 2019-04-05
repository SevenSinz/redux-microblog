import React, { Component } from 'react';
import AllBlogPosts from '../containers/AllBlogPosts';

class BlogHome extends Component {
    render() {
        return (
            <div className="BlogHome container">
                <p className="bg-secondary rounded">
                    Welcome to Microblog, our innovative side for communicating information superhighway
                </p>
                <AllBlogPosts />
            </div>
        );
    }
}

export default BlogHome;