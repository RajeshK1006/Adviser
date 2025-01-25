import React from 'react'
import generator from "./service/generator";
import "./index.css";
import { useState } from 'react';

const App = () => {

  const [qoute,setQoute] =useState("Do what you are supposed to do!!!");
  const homeLink = "https://api.adviceslip.com/advice";

  const getAdvice = async () => {
    const advice = await generator(homeLink);
    setQoute(advice);

  }

  return (
    <div>
      <div className="app">
        <div className="card">
          <h1 className="heading">{qoute}</h1>
          <button className="button" onClick={getAdvice}>
            <span>GIVE ME ADVICE!</span>
          </button>
        </div>
      </div>
    </div>
  )
}

export default App;
