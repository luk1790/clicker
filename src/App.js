import React, { useState, useEffect } from 'react';

import './App.css';
import Footer from './footer';
import Header from './header';
import Content from './content';
import Cookies from 'universal-cookie';

const cookies = new Cookies();

const startValue = 10;

function App() {
  let cookiesCounter = parseInt(cookies.get('counter'), startValue);
  let cookiesMultiplier = cookies.get('multiplier');
  let multiplierDefault = [
    {
      id: 1,
      label: 'Diligence',
      multiplier: 1,
      price: 1,
      counter: 0,
      logo: 'briefcase',
    },
    {
      id: 2,
      label: 'Strength',
      multiplier: 0,
      price: 1,
      counter: 0,
      speed: 2,
      logo: 'dumbbell',
    },
    {
      id: 3,
      label: 'Speed',
      multiplier: 4,
      price: 200,
      counter: 0,
      logo: 'gauge',
    },
    {
      id: 4,
      label: 'Inteligence',
      multiplier: 6,
      price: 500,
      counter: 0,
      logo: 'brain',
    },
    // { id: 5, label: 'test', multiplier: 7, price: 1000, counter: 0 },
    // { id: 6, label: 'test', multiplier: 8, price: 2000, counter: 0 },
  ];
  let time = 5000;

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

  function countMultiply() {
    return multiplier.reduce(
      (prev, next) =>
        prev + (next.multiplier ? next.multiplier * next.counter : 0),
      0
    );
  }
  function countTime() {
    let speed = multiplier.reduce(
      (prev, next) => prev + (next.speed ? next.speed * next.counter : 0),
      0
    );
    return Math.floor(time / (speed ? speed : 1));
  }

  function incrementCounter() {
    console.log('elements', multiplier);
    console.log('multi', countMultiply());
    console.log('speed', countTime());
    console.log(counter !== '0');
    console.log(counter);
    if (counter !== '0') {
      cookies.set('counter', counter + countMultiply(), { path: '/' });
      setCounter(counter + countMultiply());
    }
  }

  function updateTitle() {
    document.getElementById('title').innerText = `${counter}$ - Game`;
  }

  function updateState({ id, priceDiff }) {
    console.log('sdd');
    setCounter(counter - priceDiff);
    let newMultiplier = multiplier.map((element) => {
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
