import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { store } from "./store/index";
import { Provider, connect } from "react-redux";
import { manipulate } from "./actions";
import { Main } from "./view/main";
import { Home } from "./view/home";
import "./app.scss";

class App extends React.Component {
  render() {
    return (
      <Router>
       <div>
         {this.props.data}
         <Route exact path="/" component={Main} />
         <Route path="/home" component={Home} />
       </div>
     </Router>
    );
  }
}

const mapStateToProps = state => {
  return {
    data: 'test'
  };
};
const mapDispatchToProps = { manipulate };

export const AppContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

ReactDOM.render(
  <Provider store={store}>
    <AppContainer />
  </Provider>,
  document.getElementById("app")
);
