import Header from "./components/Header"
import Tasks from "./components/Tasks"
import {useState} from "react"
import { identity } from "rxjs"
import AddTask from "./components/AddTask"



function App() {
  const [showAddTask, setShowAddTask]=useState(true);
  const [tasks, setTasks]=useState([
    {
    
      userId: 1,
      id: 20,
      title: "ullam nobis libero sapiente ad optio sint -----",
      completed: true,
      },
      {
      userId: 1,
      id: 21,
      title: "suscipit repellat esse quibusdam voluptatem incidunt-----",
      completed: false,
      },
      {
      userId: 2,
      id: 22,
      title: "distinctio vitae autem nihil ut molestias quo--------",
      completed: true,
      },
      {
      userId: 2,
      id: 23,
      title: "et itaque necessitatibus maxime molestiae qui quas velit------",
      completed: false,
      },
      {
      userId: 2,
      id: 24,
      title: "adipisci non ad dicta qui amet quaerat doloribus ea-------",
      completed: false,
      },
  ])

  const addTask=(task)=>{
    const id=Math.floor(Math.random()*1000)+1
      const s= {id, ...task}
      setTasks([...tasks, s])

  }

   const ontask =(id)=>{
      setTasks(tasks.filter((e)=>e.id!==id))
   }

   const btndoubleClick=(id)=>{
    setTasks(tasks.map((e)=>e.id===id ?{
      ...e, completed : !e.completed
    }:tasks ))
}
  return (
    <div className="container">
     <Header onAdd={()=>setShowAddTask(!showAddTask)}
        showAdd={showAddTask}
     ></Header>
     { showAddTask && <AddTask addtask={addTask}></AddTask>}
     {tasks.length>0 ?(
     <Tasks sine={tasks} Deleteme={ontask} doubleClick={btndoubleClick}   ></Tasks>):("NO LIST TO SHOW BUDDY")}
    </div>

  );
}

export default App;
