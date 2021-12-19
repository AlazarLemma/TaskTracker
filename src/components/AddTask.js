 import {useState} from 'react'
import { FaLessThanEqual } from 'react-icons/fa'


const AddTask=({addtask})=> {

const[text,setText]= useState('');
const[day,setDay]= useState('');
const[reminder,setReminder]= useState(false);


     
    const onSave=(e)=>{
            e.preventDefault();
console.log("ffff");
   if(text==''){
       alert("add task");
       return;
   }else
   {

  const newAdd={
    title: text,
    userId: day,
    completed: reminder
};
     addtask(newAdd);
     setText('');
     setDay('');
     setReminder(false);

    }
}



    return (
        <form className='add-form' onSubmit={(e)=>{
            onSave(e)
        }}>
     <div className="form-control">
      <label> Task</label>
        <input type='text' placeholder="Add Task" value={text} onChange={(e)=>
        setText(e.target.value)}></input>
     </div>
     <div className="form-control">
      <label> Day & Time</label>
        <input type='text' placeholder="Add a day and time" value={day} onChange={(e)=>
        setDay(e.target.value)}></input>
     </div>
     <div className="form-control form-control-check">
      <label> Set Reminder</label>
        <input type='checkbox' placeholder="set reminder" value={reminder} checked={reminder} onChange={(e)=>{
        setReminder(e.currentTarget.checked)
        console.log("bek");
    }

        }></input>
     </div>

        <input type="submit" value="Save Task" className="btn btn-block"></input>
        </form>
    )
}

export default AddTask
