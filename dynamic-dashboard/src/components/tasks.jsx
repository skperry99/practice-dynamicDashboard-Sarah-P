const myTasks = [
    {
        id: 1,
        name: "Do' the dishes",
        completed: false
    },
    {
        id: 2,
        name: "Mop the floor",
        completed: false
    },
    {
        id: 3,
        name: "Do Laundry",
        completed: true
    }
];

function displayChecked(singleTask){

    if(singleTask.completed === true)
    {
        return(
            <span>&#9989;</span>
        ) 
    }

    else{
        return(
            <span>&#10060;</span>
        )   
    }
}

let taskList = myTasks.map(task => (
<li key={task.id}> {task.name} 
        {displayChecked(task)}
</li>
))

export default function TaskList (){
  
  return (
        <>
            <p>
                Here are the list of Tasks:
            </p>

            <ol>
                {taskList}
            </ol>
        </>
    )
}