'use client'
import { useRef, useState } from 'react';
import Image from 'next/image';
import house from './images/house.jpg'
import "./both.js"
export default function App() {
  const windowSize = useRef([window.innerWidth, window.innerHeight]);
  // Backend JS
  
  let [x, setx] = useState(0);
  let [bin, setbin] = useState(1);
  function func (x: number ) {
    setx(x+=1)
    setbin(1)
  }
  function otherfunc(x: number) {
    if (x!=0 && bin == 1) 
    {
      setx(x=0)
    } else if (bin==0) { 
      setx(x+=1)
    }
    console.log(bin)
    setbin(0)
  }


  //CSS
  var mystyle = {
    color: "white",
    backgroundColor: "DodgerBlue",
    padding: "10px",
    fontFamily: "Arial",
    border: 0
  };
  return (
    <>
    <div style={{height: windowSize.current[1], width: windowSize.current[0], background: 'white'}}>
      
      <button id = 'button' onClick={() => func(x)} style={mystyle}> Press me!</button>
      <p id='thisthing'>{x}</p>
      <button id = 'buttontwo' onClick={() => otherfunc(x)} style={mystyle}> Press me to clear!</button>
      <div>
        <Image src={house} alt="Picture of a house"/>
      </div>
    </div>
    </>
  );
}