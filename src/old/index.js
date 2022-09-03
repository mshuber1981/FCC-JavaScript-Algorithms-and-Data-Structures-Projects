import React from "react";
import ReactDOM from "react-dom";
// https://reactrouter.com/web/guides/quick-start (using HashRouter so custom 404 will work with GitHub Pages)
import { HashRouter as Router } from "react-router-dom";
// https://getbootstrap.com/docs/4.5/getting-started/introduction/
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.scss";
import App from "./App";

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById("root")
);
