'use client'
import {motion, AnimatePresence} from "framer-motion";
import { useRef, useState, useEffect } from 'react';
import React from 'react';
import styles from "./my.module.css";
import router from "next/router";
console.log(styles.entBack);

export default function App() {
  
 const entBack = {
  backgroundColor: '#4880EC', // For browsers that do not support gradients 
  backgroundImage: "linear-gradient(to right, #4880EC, #019CAD)" //background
    
  }

  const flex_Container = {
    display: 'flex' as const,
    flexDirection: 'row' as const,
    justifyContent: "center", 
    width: "100%"
  }
  const mystyle = {
    color: "black",
    padding: "10px",
    textAlign: "center" as const,
    fontFamily: "Trebuchet MS"
  }
  
  const childStyle = {
    paddingTop: "2%",
    paddingBottom: "2%",
    paddingLeft: '7%',
    paddingRight: '7%',
    backgroundColor: "rgb(255, 255, 255)", 
    border: "2px solid black"
  }



  return (
    
    <>


    <body style = {entBack} className  = {styles.entireBack}> 
        <article  style = {childStyle}  >Play Now</article>
        <article  style = {childStyle}   >Puzzles</article>
        <article  style = {childStyle}   >Article</article>
        <article   style = {childStyle}  >Your Stats</article>
        <article   style = {childStyle}  >Study Now</article>
     
      <div>
        <h1 style = {mystyle}>Welcome to freechess.org!</h1>  
      </div>
    </body>
    </>
  );

}