import React, { Component } from 'react';
import { Switch, Redirect, Route } from "react-router-dom";

import BlogHome from './BlogHome';
import PostFormEditAdd from './PostFormEditAdd';
import BlogPost from './BlogPost';
import Navbar from "./Navbar";
import './App.css';

class App extends Component {

  render() {
    return (
      <div className="App container">

        <header><Navbar {...this.props} /></header>

        <Switch>

          <Route exact path="/"
            render={(rtProps) => <BlogHome {...rtProps} />} />

          <Route exact path="/new"
            render={(props) => <PostFormEditAdd {...props} />} />

          <Route exact path="/:id"
            render={(rtProps) => <BlogPost {...rtProps} />} />

          <Redirect to="/" />

        </Switch>
      </div>
    );
  }
}

export default App;
