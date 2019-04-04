import React, { Component } from 'react';
import { Switch, Redirect, Route } from "react-router-dom";

import BlogHome from './BlogHome';
import PostFormEditAdd from './PostFormEditAdd';
import BlogPost from './BlogPost';
import Navbar from "./Navbar";
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      blogPosts: {}
    }
    this.deletePost = this.deletePost.bind(this);
    this.savePost = this.savePost.bind(this);
  }

  deletePost(id) {
    let newBlogPosts = {...this.state.blogPosts} 
    delete newBlogPosts[id];
    this.setState( { blogPosts: newBlogPosts })
    console.log("inside deletePost in App, blogPosts = ", this.state.blogPosts)
  }

  savePost(blogPost) {
    console.log("inside savePost in App, blogPost = ", blogPost.id)
    this.setState({ blogPosts: { ...this.state.blogPosts, [blogPost.id]: blogPost }});
    console.log("inside savePost in App, blogPosts = ", this.state)
  }

  getBlogPost(rtProps) {
    console.log("inside getBlogPost in App, blogPost = ", this.state.blogPosts[rtProps.match.params.id])

    return this.state.blogPosts[rtProps.match.params.id]
  }

  getBlogPosts(){
    return Object.values(this.state.blogPosts);
  }

  render() {
    return (
      <div className="App container">
        <header><Navbar {...this.props} /></header>
        <Switch>

          <Route exact path="/"
            render={(rtProps) => <BlogHome
              {...rtProps}
              titleList={this.getBlogPosts()} />} />

          <Route exact path="/new"
            render={(props) => <PostFormEditAdd
              {...props}
              {...this.props}
              handleSavePost={this.savePost} />} />

          <Route exact path="/:id"
            render={(rtProps) => <BlogPost
              {...rtProps}
              // blogPost={this.getBlogPost(rtProps)}
              handleDeletePost={this.deletePost}
              handleSavePost={this.savePost} />} />

          <Redirect to="/" />

        </Switch>
      </div>
    );
  }
}

export default App;
