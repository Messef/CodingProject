'use client'
import { useRef, useState, useEffect } from 'react';
import Image from 'next/image';
import house from './images/house.jpg'

import "./both.js"
export default function App() {
  
  const windowSize = useRef([window.innerWidth, window.innerHeight]);
  let past_scores = []
  // Backend JS
  let [msg, setmsg] = useState("Click me to start")
  let [othermsg, othersetmsg] = useState("")
  let [x, setx] = useState(0);
  let [time, settime] = useState(5);
  let timer = 0
  const [count, setCount] = useState(0);
  const countRef = useRef(x);
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
  
  
  countRef.current = x;

  const calculateTimeLeft = () => {
    let year = new Date().getFullYear();
    let difference = +new Date(`10/01/${year}`) - +new Date();
  
    let timeRemaining = {};
  
    if (difference > 0) {
      timeRemaining = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60)
      };
    }
    
    return timeRemaining;
  }
  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
  });
  function func (x: any ) {
    
    if (msg=="Click me to start") {
      setmsg(msg="Press me to increase the number on screen!")
    }
    if (x==0) {
  
      setTimeout(() => {
        othersetmsg(othermsg="you got " + countRef.current/time + " cps!")
        countRef.current=0
        setx(x=0)
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
      <p>{timer}</p>
      <div>
        <Image src={house} alt="Picture of a house"/>
      <p>{othermsg}</p>
      

<form action="welcome.php" method="get">
Name: <input type="text" name="name"/><br/>
E-mail: <input type="text" name="email"/><br/>
<input type="submit"/>
</form>

      </div>
    </div>
    </>
  );
  
}