import React from 'react'
import Task from "./Task"

function Tasks({sine,Deleteme}) {
    return (
     <div>
         {
             sine.map((e)=>(
                <Task id={e.id} title={e.title} deleteme={Deleteme}></Task>
                
             )
             )
        
        
             }
     </div>
    )
}

export default Tasks
