import React, { Component } from 'react';
import { Switch, Redirect, Route, BrowserRouter } from "react-router-dom";
import BlogHome from './BlogHome';
import PostFormEditAdd from './PostFormEditAdd';
import BlogPost from './BlogPost';
import Navbar from "./Navbar";
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      blogPosts: [],
    }
    this.delete = this.delete.bind(this);
    this.save = this.save.bind(this);
  }

  delete(id){
    this.setState( { blogPosts: this.state.blogPosts.filter(post => post.id !== id) } )
  }

  save(blogPost){
    console.log("inside save in App, blogPost = ", blogPost)
    let blogPosts = this.state.blogPosts.filter(post => post.id !== blogPost.id) 
    console.log("blogPosts = ", blogPosts)
    this.setState({ blogPosts: [...blogPosts, blogPost] })
    console.log("state adter update = ", [...blogPosts, blogPost] )
  }

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <header><Navbar {...this.props} /></header>
          <Switch>
            
            <Route  exact path="/"
                    render={(props) => <BlogHome
                    {...props} 
                    {...this.props}
                    titleList= {this.state.blogPosts} />} />
            
            <Route  exact path="/new"
                    render={(props) => <PostFormEditAdd
                    {...props}  
                    {...this.props}
                    handleSave={ this.save } />} />
            
            <Route  exact path="/:id"
                    render={(props) => <BlogPost
                    {...props} 
                    {...this.props}
                    blogPosts={this.state.blogPosts}
                    handleDelete={ this.delete }
                    handleSave={ this.save }  />} />
            
            <Redirect to="/" />
          
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
