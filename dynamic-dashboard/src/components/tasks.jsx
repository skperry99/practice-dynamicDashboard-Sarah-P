import { myTasks } from "../data/task-list";

export default function TaskList() {
  

  return (
    <>
      <h3>These are your tasks:</h3>

      <ul className="list-group">
        {myTasks.map((task) => (
          
          <li key={task.id} className={task.completed ? "done" : "nope"}>
            {task.completed ? <span> &#x2705; </span> : <span> &#10060; </span>}
            {task.name}
          </li>
        ))}
      </ul>
    </>
  );
}
