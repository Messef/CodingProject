'use client'
import ReactDOM from 'react-dom/client';
import { useRef, useState } from 'react';

export default function App() {
  const windowSize = useRef([window.innerWidth, window.innerHeight]);
  
  let [x, setx] = useState(0);
  const y = document.getElementById('thisthing') as object|any
  function func (x: any ) {
    setx(x+=1)
    console.log(x)
  }
  function yes(x: any) {
    setx(x=0)

  }
  return (
    <>
    <div style={{height: windowSize.current[1], width: windowSize.current[0], background: 'white'}}>
      
      <button id = 'button' onClick={() => func(x)}> Press me!</button>
      <p id='thisthing'>{x}</p>
      <button id = 'buttontwo' onClick={() => yes(x)}> Press me to clear!</button>
    </div>
    </>
  );
}