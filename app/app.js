import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./app.scss";

function App() {
  return (<div>app</div>);
}

function Home() {
  return <div>home</div>;
}

ReactDOM.render(
  <Router>
    <div>
        <Route exact path="/" component={App} />
        <Route path="/home" component={Home} />
     </div>
  </Router>,
  document.getElementById("app")
);
