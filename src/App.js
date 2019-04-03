import React, { Component } from 'react';
import { Switch, Redirect, Route, BrowserRouter } from "react-router-dom";
import BlogHome from './BlogHome';
import PostFormEditAdd from './PostFormEditAdd';

import Navbar from "./Navbar";
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
            <BrowserRouter>
              <Navbar {...this.props} />
              <Switch>
                <Route path="/" exact render={props => <BlogHome {...props} {...this.props} />} />
                <Route path="/new" exact render={props => <PostFormEditAdd {...props} {...this.props} />} />
                <Redirect  to="/" />
              </Switch>
            </BrowserRouter>
      </div>
    );
  }
}

export default App;
