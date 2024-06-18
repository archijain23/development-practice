import React from 'react';
import MsgBox from './msg-box';
import './App.css'

function App() {
  return(
    <>
   <MsgBox username="Archi" textcolor="blue"/>
   <MsgBox username="Ayush" textcolor="green"/>
   <MsgBox username="Arya" textcolor="orange"/>
   <MsgBox username="Mouli" textcolor="purple"/>
    </>
  );
}

export default App
