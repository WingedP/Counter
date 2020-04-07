import React,{useState} from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";

import {useSelector,useDispatch} from 'react-redux';
import Box from './components/Box';
import Footer from './components/Footer';

function App() {
  let dispatch=useDispatch();

  let  boxList = useSelector(state => state.boxList)
  let  countNum = useSelector(state => state.countNum)
  // let singleColor = useSelector(state =>state.color)
  let incrementNumber=()=>{  dispatch({type:'INCREMENT'})}
  let decrementNumber=()=>{dispatch({type:'DECREMENT'})}
  let resetNumber=()=>{dispatch({type:'RESET'})}
  let changeColor=(color)=>{dispatch
  ({ type: "CHANGE_COLOR", payload:color})}

  let renderBox=()=>{   
    return boxList && boxList.map((item,index)=><Box id={index}/>)
  
  
  }



  return (
  <div className="App">
    <h2>{countNum}</h2>
<button className="allbuttons" onClick={()=>incrementNumber()}>Increment</button>
<button className="allbuttons" onClick={()=>decrementNumber()}>Decrement</button>
<button className="allbuttons" onClick={()=>resetNumber()}>Reset</button>
<input  onChange={e =>changeColor(e.target.value)}
></input>
<div className="boxcontainer">{renderBox()}</div>
<Footer/>
  </div>
  );
}


export default App;
