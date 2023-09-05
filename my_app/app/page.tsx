'use client'
import { useRef, useState, useEffect } from 'react';
import Image from 'next/image';
import house from './images/house.jpg'

import "./both.js"
export default function App() {
  
  const windowSize = useRef([window.innerWidth, window.innerHeight]);
  // Backend JS
  let [msg, setmsg] = useState("Click me to start")
  let [othermsg, othersetmsg] = useState("")
  let [x, setx] = useState(0);
  const countRef = useRef(x);
  countRef.current = x;
  const [count, setCount] = useState(0);
  function func (x: any ) {
    
    if (msg=="Click me to start") {
      setmsg(msg="Press me to increase the number on screen!")
    }
    if (x==0) {
      
  useEffect(() => {
    const id = setInterval(() => setCount((oldCount) => oldCount + 1), 1000);

    return () => {
      clearInterval(id);
    };
  }, []);
      setTimeout(() => {
        othersetmsg(othermsg="you got " + countRef.current/5 + " cps!")
        alert("You're Done!")
      
      
      }, 5000);
    }
    setx(x+=1)
  }
  function clear(x: number) {
      setx(x=0)
  }


  //CSS
  var mystyle = {
    color: "white",
    backgroundColor: "DodgerBlue",
    padding: "10px",
    fontFamily: "Georgia",
    border: 0
  };
  return (
    <>
    <div style={{height: windowSize.current[1], width: windowSize.current[0], background: 'white'}}>
      
      <button id = 'button' onClick={() => func(x)} style={mystyle}> {msg}</button>
      <p></p>
      <p id='thisthing'>{x}</p>
      <button id = 'buttontwo' style={mystyle}onClick= { () => clear(x)}> Press me to clear!</button>
      <div>
        <Image src={house} alt="Picture of a house"/>
      <p>{othermsg}</p>
      </div>
    </div>
    </>
  );
  
}