import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {createStore} from "redux";
import {Provider} from 'react-redux';


let initialState={
  countNum:1,
  boxList:[],
  color: '',
  textColor:'',
  // boxColors: [null]
}

function countReducer(state=initialState,action){
if(action.type==='INCREMENT'){state.countNum++;state.boxList.push('');
  // if(5<state.countNum<10&&15<state.countNum<20){state.textColor=getRandomColor()}
} 
else if(action.type==='DECREMENT') {
  if (state.countNum==0){state.countNum=0} else {state.countNum--; state.boxList.pop('')}}

else if(action.type==='RESET'){state.countNum=0; state.boxList=[]}
else if(action.type==='CHANGE_COLOR') {state.color=action.payload}
else if(action.type==='SINGLECOLOR')
{state.boxList[action.payload.id] = action.payload.color}

  return state
}

let getRandomColor = () => {
  let letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

const store=createStore(countReducer);
ReactDOM.render(
  <Provider store={store}> 
  <App/>
  </Provider>,  
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
