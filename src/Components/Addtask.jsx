import React,{useState} from "react";

const Addtask = (props) => {
    const [newtask,setNewtask] = useState({name:"",description:"",done:false});
    return (
        <>
        <input type="text" placeholder="Task Name" onChange={(e)=>(setNewtask({name:e.target.value}))}></input>
        <input type="text" placeholder="Task description"></input>
        <button>Add Task</button>
        </>
    );
    }
export default Addtask;