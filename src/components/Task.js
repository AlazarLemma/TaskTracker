import React from 'react'

import {FaTimes} from 'react-icons/fa'


 function Task(props) {
    return (
        
     
         <div className="task" id={props}>
             <h3 id={props.id}>
              {props.id} <FaTimes onClick={()=>props.deleteme(props.id)}
              style ={{color:'red', cursor : 'pointer'}}/></h3>
              <p id={props.id}>{props.title} </p>
            
    </div>
       
    )
}
export default Task
