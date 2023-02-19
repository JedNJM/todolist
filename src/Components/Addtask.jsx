import React, { useState } from "react";

const Addtask = ({add}) => {
  const [newtask, setNewtask] = useState({
    name: "",
    description: "",
    done: false,
  });
  return (
    <>
      <input
        type="text"
        placeholder="Task Name"
        onChange={(e) => setNewtask({ ...newtask,name: e.target.value })}
      ></input>
      <input
        type="text"
        placeholder="Task description"
        onChange={(e) => setNewtask({ ...newtask,description: e.target.value })}
      ></input>
      <button onClick={()=>add(newtask)}>Add Task</button>
    </>
  );
};
export default Addtask;
