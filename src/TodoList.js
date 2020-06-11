import React from "react";
import './index.css';
function TodoList(props){
   const style={
       textDecoration:"line-through",
       fontStyle:"italic",
       color:"darkGray"
   }
    
        return(
            <div className="list" >
                <input type="checkbox"  className="inp_1" checked={props.item.completed} onChange={()=>{props.handleClick(props.item.id)}}></input>
                <p className="my" style={props.item.completed ? style : null}>{props.item.txt}</p>
                <button className="delete" onClick={()=>{props.onDelete(props.item)}}>x</button>
            </div>
        )
    
}
export default TodoList;