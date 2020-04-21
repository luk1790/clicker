import React from "react";

import "./App.css";
import Footer from "./footer";
import Header from "./header";
import Content from "./content";
import Cookies from "universal-cookie";

const cookies = new Cookies();

class App extends React.Component {
  constructor() {
    super();
    let cookiesCounter = parseInt(cookies.get("counter"), 10);
    let cookiesMultiply = parseInt(cookies.get("multiply"), 10);

    this.state = {
      counter: cookiesCounter ? cookiesCounter : 0,
      multiply: cookiesMultiply ? cookiesMultiply : 0,
    };

    this.incrementCounter = this.incrementCounter.bind(this);
    this.updateState = this.updateState.bind(this);
    this.clearCookies = this.clearCookies.bind(this);
  }

  componentDidMount() {
    this.intervalId = setInterval(() => {
      this.incrementCounter();
    }, 5000);
  }
  componentWillUnmount() {
    clearInterval(this.intervalId);
  }

  updateState({multiply, price}) {
    let newState = this.state;
    newState.multiply = newState.multiply + multiply;
    newState.counter = newState.counter - price;
    cookies.set("multiply", newState.multiply, { path: "/" });
    cookies.set("counter", newState.counter, { path: "/" });
    this.setState(newState);
  }

  incrementCounter() {
    console.log(this.state);
    let newState = this.state;
    newState.counter = this.state.counter + this.state.multiply;
    cookies.set("counter", newState.counter, { path: "/" });
    this.setState(newState);
  }

  clearCookies() {
    cookies.set("multiply", 0, { path: "/" });
    cookies.set("counter", 0, { path: "/" });
    this.setState({
      counter: 0,
      multiply: 0,
    });
  }

  render() {
    return (
      <div className="clicker">
        <Header counter={this.state.counter} multiplier={this.state.multiply} clearCookies={this.clearCookies} />
        <Content
          elements={[
            { label: "test", multiplier: 1, price: 0 },
            { label: "test", multiplier: 4, price: 200 },
            { label: "test", multiplier: 6, price: 500 },
            { label: "test", multiplier: 7, price: 1000 },
            { label: "test", multiplier: 8, price: 2000 },
          ]}
          updateState={this.updateState}
          counter={this.state.counter}
        />
        <Footer />
      </div>
    );
  }
}

export default App;
