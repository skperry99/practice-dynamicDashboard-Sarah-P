import "./App.css";
import Member from "./components/Premium";
import Greeting from "./components/Greeting";
import TaskList from "./components/tasks";
import TaskCounter from "./components/TaskCounter";

function App() {
  return (
    <>
      <div>
        <Greeting/>
        <Member/>
        <TaskList/>
        <TaskCounter/>
      </div>
    </>
  );
}

export default App;