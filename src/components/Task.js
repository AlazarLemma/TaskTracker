import React from 'react'

import {FaTimes} from 'react-icons/fa'


 function Task(props) {
    return (
        
     
         <div 
         
         //className={`task ${props.completed? 'reminder' :''}`} 



    className={`task ${props.completed? 'reminder':''}`}

         
         id={props.id}
           onDoubleClick={()=>props.dclick(props.id)}
           >
               <h3>

{props.title}{" "}

<FaTimes

  style={{ color: "red", cursor: "pointer" }}

  onClick={() => {

    props.deleteme(props.id);

  }}

></FaTimes>{" "}

</h3>
              <p>{props.id}</p>
            
    </div>
       
    )
}
export default Task
