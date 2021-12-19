import React from 'react'
import Task from "./Task"

function Tasks({sine,Deleteme,doubleClick,addtask}) {
    return (
     <div>
         {
             sine.map((e)=>(
                <Task id={e.id} title={e.title} completed= {e.completed} deleteme={Deleteme} dclick={doubleClick}></Task>
                
             )
             )
        
        
             }
     </div>
    )
}

export default Tasks
