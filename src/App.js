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
    // this.setState({ blogPosts: this.state.blogPosts.filter(post => post.id !== id) })
    let newBlogPosts = {...this.state.blogPosts} 
    delete newBlogPosts[id];
    this.setState( { blogPosts: newBlogPosts })
    console.log("inside deletePost in App, blogPosts = ", this.state.blogPosts)
    
  }

  savePost(blogPost) {
    console.log("inside savePost in App, blogPost = ", blogPost.id)
    let id = blogPost.id;
    this.setState({ blogPosts: { ...this.state.blogPosts, [id]: blogPost }})
    console.log("inside savePost in App, blogPosts = ", this.state)
    // let blogPosts = this.state.blogPosts.filter(post => post.id !== blogPost.id)
    // // console.log("blogPosts = ", blogPosts)
    // this.setState({ blogPosts: [...blogPosts, blogPost] })
    // // console.log("state after update = ", [...blogPosts, blogPost])
  }

  getBlogPost(rtProps) {
    // return this.state.blogPosts.filter(post => post.id === rtProps.match.params.id)[0]
    console.log("inside getBlogPost in App, blogPost = ", this.state.blogPosts[rtProps.match.params.id])

    return this.state.blogPosts[rtProps.match.params.id]
  }

  getBlogPosts(){
    // if (this.state.blogPosts) {
    // console.log("Object.values(this.props.blogPosts) = ", Object.values(this.state.blogPosts))
    return Object.values(this.state.blogPosts)

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
              blogPost={this.getBlogPost(rtProps)}
              handleDeletePost={this.deletePost}
              handleSavePost={this.savePost} />} />

          <Redirect to="/" />

        </Switch>
      </div>
    );
  }
}

export default App;
