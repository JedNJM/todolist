import Lists from "./Components/Lists";
import "./App.css";
import Addtask from "./Components/Addtask";
function App() {
  const tasks = [
    { name: "Study", description: "Studying react", done: true },
    { name: "Sleep", description: "Sleeping", done: false },
    { name: "Eat", description: "Eating", done: false },
    { name: "Play", description: "Playing", done: false },
    { name: "Work", description: "Working", done: false },
    { name: "Study", description: "Studying react", done: true },
  ];
  return (
    <>
      <div style={{ backgroundColor: "azure" }}>
        <div className="App">
          <Addtask/>
          {tasks.map((el) => (
            <Lists task={el.name} description={el.description} done={el.done} />
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
