import Header from "./components/Header"
import Tasks from "./components/Tasks"
import {useState} from "react"




function App() {
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

   const ontask =(id)=>{
      setTasks(tasks.filter((e)=>e.id!==id))
   }
  

  return (
    <div className="container">
     <Header></Header>

     {tasks.length>0 ?(
     <Tasks sine={tasks} Deleteme={ontask}></Tasks>):("NO LIST TO SHOW BUDDY")}
    </div>

  );
}

export default App;
