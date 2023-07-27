
import React ,{useState} from "react";
import './../styles/App.css';

const App = () => {
 
  const[input,setInput]=useState('');
  const[tasks,setTasks]=useState([]);

  console.log('input: ',input);
  console.log('tasks: ',tasks);
  function add(){
    setTasks([...tasks,input]);
  }

  function deleteTask(task){
     setTasks(tasks.filter((t)=>{
          if(t!==task) return t;
     }))
  }


  return (
    <div>
        {/* Do not remove the main div */}
        <p>To-Do List</p>
         <div>
          <input type='text'  value={input} onChange={(e)=>setInput(e.target.value)}/>
          <button onClick={add}>Add Todo</button>
         </div>
         <div>
           {tasks.length>0 && tasks.map((task,index)=>{
            return <div style={{display:'flex',justifyContent:'space-between'}} key={index}>
             <span>{task}</span> 
             <button onClick={()=>deleteTask(task)}>Delete</button>
            </div>
           })}
         </div>
    </div>
  )
}

export default App
