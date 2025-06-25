import { myTasks } from "./task-list";
// export const myTasks = [
//   {
//     id: 1,
//     name: "Wash dishes",
//     completed: false,
//   },
//   {
//     id: 2,
//     name: "Mop the floor",
//     completed: false,
//   },
//   {
//     id: 3,
//     name: "Do laundry",
//     completed: true,
//   },
// ];

// function displayChecked(singleTask){

//     if(singleTask.completed === true)
//     {
//         return(
//             <span>&#9989;</span>
//         )
//     }

//     else{
//         return(
//             <span>&#10060;</span>
//         )
//     }
// }

function displayChecked(singleTask) {
  return (
    <span>
      {singleTask.completed ? <span> &#x2705; </span> : <span> &#10060; </span>}
    </span>
  );
}

let taskList = myTasks.map((task) => (
  <li key={task.id}>
    {" "}
    {task.name}
    {displayChecked(task)}
  </li>
));

export default function TaskList() {
  return (
    <>
      <h3>These are your tasks:</h3>

      <ul>{taskList}</ul>
    </>
  );
}
