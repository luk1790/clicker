import React, { useState, useEffect } from 'react';

import './App.css';
import Footer from './footer';
import Header from './header';
import Content from './content';
import Cookies from 'universal-cookie';
import { multiplierDefault, valueStartWallet } from './config/main';

const cookies = new Cookies();

const startValue = valueStartWallet;

type multiplierType = {
  id: number;
  label: string;
  multiplier: number;
  price: number;
  counter: number;
  speed?: number;
  logo: string;
};

function App() {
  let cookiesCounter: number = parseInt(cookies.get('counter'), startValue);
  let cookiesMultiplier: multiplierType[] = cookies.get('multiplier');

  let time: number = 5000;

  const [counter, setCounter] = useState(cookiesCounter ? cookiesCounter : 10);
  const [multiplier, setMultiplier] = useState(
    cookiesMultiplier ? cookiesMultiplier : multiplierDefault
  );


  useEffect(() => {
    updateTitle();
    let intervalId = setTimeout(() => {
      incrementCounter();
    }, countTime());
    return () => {
      clearTimeout(intervalId);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [counter]);

  function countMultiply(): number {
    return multiplier.reduce(
      (prev: number, next: { multiplier: number; counter: number }) =>
        prev + (next.multiplier ? next.multiplier * next.counter : 0),
      0
    );
  }
  function countTime() {
    let speed = 0;
    multiplier.forEach((item) => {
      return speed + (item.speed ? item.speed * item.counter : 0);
    });
    return Math.floor(time / (speed ? speed : 1));
  }

  function incrementCounter() {
    // console.log('elements', multiplier);
    // console.log('multi', countMultiply());
    // console.log('speed', countTime());
    // console.log(counter !== 0);
    // console.log(counter);
    if (counter !== 0) {
      cookies.set('counter', counter + countMultiply(), { path: '/' });
      setCounter(counter + countMultiply());
    }
  }

  function updateTitle() {
    let titleInput = document.getElementById('title');
    if (titleInput) {
      titleInput.innerText = `${counter}$ - Game`;
    }
  }

  function updateState({ id, priceDiff }: { id: number; priceDiff: number }) {
    setCounter(counter - priceDiff);
    let newMultiplier: multiplierType[] = multiplier.map((element) => {
      if (element.id === id) {
        element.counter++;
      }
      return element;
    });
    setMultiplier(newMultiplier);
    cookies.set('counter', counter - priceDiff, { path: '/' });
    cookies.set('multiplier', newMultiplier, { path: '/' });
  }

  function clearCookies() {
    setCounter(startValue);
    setMultiplier(multiplierDefault);
    cookies.set('counter', startValue, { path: '/' });
    cookies.set('multiplier', multiplierDefault, { path: '/' });
  }
  return (
    <div className="clicker">
      <Header
        counter={counter}
        speed={countTime()}
        multiplier={countMultiply()}
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
