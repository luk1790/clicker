import React, { useState, useEffect } from "react";

import "./App.css";
import Footer from "./footer";
import Header from "./header";
import Content from "./content";
import Cookies from "universal-cookie";

const cookies = new Cookies();
function App() {
  let cookiesCounter = parseInt(cookies.get("counter"), 10);
  let cookiesMultiply = parseInt(cookies.get("multiply"), 10);
  let cookiesMultiplier = cookies.get("multiplier");
  let multiplierDefault = [
    { label: "test", multiplier: 1, price: 0, counter: 0 },
    { label: "test", multiplier: 4, price: 200, counter: 0 },
    { label: "test", multiplier: 6, price: 500, counter: 0 },
    { label: "test", multiplier: 7, price: 1000, counter: 0 },
    { label: "test", multiplier: 8, price: 2000, counter: 0 },
  ];
  // let intervalId = null;
  const [counter, setCounter] = useState(cookiesCounter ? cookiesCounter : "0");
  const [multiply, setMultiply] = useState(
    cookiesMultiply ? cookiesMultiply : 0
  );
  const [multiplier, setMultiplier] = useState(
    cookiesMultiplier ? cookiesMultiplier : multiplierDefault
  );

  useEffect(() => {
    updateTitle();
    let intervalId = setTimeout(() => {
      incrementCounter();
    }, 1000);
    return () => {
      clearTimeout(intervalId);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [counter]);

  function incrementCounter() {
    console.log("counter", counter + multiply);
    if (counter !== "0") {
      cookies.set("counter", counter + multiply, { path: "/" });
      setCounter(counter + multiply);
    }
  }

  function updateTitle() {
    document.getElementById("title").innerText = `${counter}$ - Game`;
  }

  function updateState({ multiplyDiff, priceDiff }) {
    setMultiply(multiply + multiplyDiff);
    setCounter(counter - priceDiff);
    let newMultiplier = multiplier.map((element) => {
      if (element.multiplier === multiplyDiff && element.price === priceDiff) {
        element.counter++;
      }
      return element;
    });
    setMultiplier(newMultiplier);
    cookies.set("multiply", multiply + multiplyDiff, { path: "/" });
    cookies.set("counter", counter - priceDiff, { path: "/" });
    cookies.set("multiplier", newMultiplier, { path: "/" });
  }

  function clearCookies() {
    setCounter("0");
    setMultiply(0);
    setMultiplier(multiplierDefault);
    cookies.set("multiply", 0, { path: "/" });
    cookies.set("counter", 0, { path: "/" });
    cookies.set("multiplier", multiplierDefault, { path: "/" });
  }
  return (
    <div className="clicker">
      <Header
        counter={counter}
        multiplier={multiply}
        clearCookies={clearCookies}
      />
      <Content
        elements={multiplier}
        updateState={updateState}
        counter={counter}
      />
      <Footer />
    </div>
  );
}

export default App;
