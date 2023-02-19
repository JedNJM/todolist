import Lists from "./Components/Lists";
import "./App.css";
import Addtask from "./Components/Addtask";
import Filter from "./Components/Filter";
import React, { useState } from "react";
function App() {
  const [tasks,setTasks] = useState([
    { name: "Study", description: "Studying react", done: true },
    { name: "Sleep", description: "Sleeping", done: false },
    { name: "Eat", description: "Eating", done: false },
    { name: "Play", description: "Playing", done: false },
    { name: "Work", description: "Working", done: false },
    { name: "Study", description: "Studying react", done: true },
  ]);
  const add = (e) => {setTasks([e,...tasks])}
  return (
    <>
      <div style={{ backgroundColor: "azure" }}>
        <div className="App">
          <Addtask add={add} />
          <Filter/>
          {tasks.map((el) => (
            <Lists task={el.name} description={el.description} done={el.done} />
          ))}

        </div>
      </div>
    </>
  );
}

export default App;
