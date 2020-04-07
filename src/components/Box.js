import React from 'react'
import {useSelector,useDispatch} from 'react-redux';


export default function Box(props) {
    let dispatch=useDispatch();

    let boxColor=useSelector(state=>state.color)
    let singleColor=useSelector(state=>state.boxList[props.id])
    let textColor=useSelector(state=>state.textColor)
    let changeSingleBoxColor=(color)=>{
        
dispatch({ type: "SINGLECOLOR", payload:{color:color,id:props.id}})}


return (
   
<div 
style={{margin: 10, width: 200, height: 100,  
border: "1.4px solid black",backgroundImage:"url(https://thematicmapping.org/playground/terrain/map/tiles/contours/4/7/1.png)"  ,
backgroundColor: singleColor===""?boxColor:singleColor
}}>   
  {console.log("sisnger color",singleColor)}
  <div style={{fontSize:"15px", color:textColor}}>Colorful box<div>ID:{props.id}</div></div>

 <input onChange={(e)=>changeSingleBoxColor(e.target.value)}></input>
</div>
    )
}
