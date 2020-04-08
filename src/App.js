import React from "react";
import "./App.css";
import Footer from "./footer";

class App extends React.Component {
  render() {
    return (
      <div className="clicker">
        <header>header</header>
        <section>content</section>
        <Footer />
      </div>
    );
  }
}

export default App;
