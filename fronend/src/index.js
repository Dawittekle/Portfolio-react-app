import React from 'react'
import ReactDOM from 'react-dom'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom'

import './style.css'
import About from './views/about'
import Home from './views/home'
import Projects from './views/projects'
import blog from "./views/blog";
import blogPost from "./views/blog-post";
import NotFound from "./views/not-found";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route component={About} exact path="/about" />
        <Route component={Home} exact path="/" />
        <Route component={Projects} exact path="/projects" />
        <Route component={blog} exact path="/blog" />
        <Route component={blogPost} exact path="/blog/:slug" />
        <Route component={NotFound} path="**" />
        <Redirect to="**" />
      </Switch>
    </Router>
  );
};

ReactDOM.render(<App />, document.getElementById('app'))
