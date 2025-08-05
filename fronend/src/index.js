import React from 'react'
import ReactDOM from "react-dom/client";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";

import "./style.css";
import About from "./views/about";
import Home from "./views/home";
import Projects from "./views/projects";
import Blogs from "./views/blog";
import BlogPost from "./views/blog-post";
import NotFound from "./views/not-found";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route component={About} exact path="/about" />
        <Route component={Home} exact path="/" />
        <Route component={Projects} exact path="/projects" />
        <Route component={Blogs} exact path="/blog" />
        <Route component={BlogPost} exact path="/blog/:id" />
        <Route component={NotFound} path="**" />
        <Redirect to="**" />
      </Switch>
    </Router>
  );
};

// Use React 18+ API
const root = ReactDOM.createRoot(document.getElementById("app"));
root.render(<App />);