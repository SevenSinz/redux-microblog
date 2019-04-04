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
      blogPosts: []
    }
    this.deletePost = this.deletePost.bind(this);
    this.savePost = this.savePost.bind(this);
  }

  deletePost(id) {
    this.setState({ blogPosts: this.state.blogPosts.filter(post => post.id !== id) })
  }

  savePost(blogPost) {
    // console.log("inside savePost in App, blogPost = ", blogPost)
    let blogPosts = this.state.blogPosts.filter(post => post.id !== blogPost.id)
    console.log("blogPosts = ", blogPosts)
    this.setState({ blogPosts: [...blogPosts, blogPost] })
    console.log("state after update = ", [...blogPosts, blogPost])
  }

  getBlogPost(rtprops) {
    return this.state.blogPosts.filter(post => post.id === rtprops.match.params.id)[0]
  }

  render() {
    return (
      <div className="App container">
        <header><Navbar {...this.props} /></header>
        <Switch>

          <Route exact path="/"
            render={(props) => <BlogHome
              {...props}
              {...this.props}
              titleList={this.state.blogPosts} />} />

          <Route exact path="/new"
            render={(props) => <PostFormEditAdd
              {...props}
              {...this.props}
              handleSavePost={this.savePost} />} />

          <Route exact path="/:id"
            render={(rtprops) => <BlogPost
              {...rtprops}
              blogPost={this.getBlogPost(rtprops)}
              handleDeletePost={this.deletePost}
              handleSavePost={this.savePost} />} />

          <Redirect to="/" />

        </Switch>
      </div>
    );
  }
}

export default App;
