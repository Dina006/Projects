import { useState } from "react";
import {Task} from './task'
// import './App.css';
let Crud=()=>{
    const [todolist,settodolist]=useState([]);
    const [newTask,setNewtak]=useState("");
    let handlechange=(event)=>{
       setNewtak(event.target.value);
    };
    let addTask=()=>{
       var task={
        id:todolist.length===0?1 : todolist[todolist.length-1].id+1,
        taskName:newTask,
        completed:false
       }
       console.log(task);
       console.log(task.id);
       settodolist([...todolist,task]);
       console.log(settodolist([...todolist,task]))
    };
    let CompleteTask=(id)=>{
      settodolist(
        todolist.map((task)=>{
          if (task.id===id) {
            return {...task,completed:true}
          }
          else return task
        })
      )
    }
  
    let deleteTask=(id)=>{
        // let delet=todolist.filter((r)=>{
        //   if(r===taskName) return false;
        //   else return true;
        // });
        // settodolist(delet); 
        settodolist(todolist.filter((u)=>u.id !==id));
        // window.location.reload();
    }
    return(
    <div className='box'>
      <input type="text"className="inpu" onChange={handlechange} />
      <button className="add" onClick={addTask}>Add Task</button>
      <div className="list">
        {todolist.map((e)=>{
              return  <Task taskName={e.taskName} id={e.id} 
              deleteTask={deleteTask}
              completed={e.completed}
              CompleteTask={CompleteTask} />
        })}
      </div>
    </div>);
  }
export default Crud;