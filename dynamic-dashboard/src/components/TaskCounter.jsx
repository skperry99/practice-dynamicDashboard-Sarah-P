import { myTasks } from "../data/task-list";

export default function TaskCounter() {
  let taskCount = 0;
  let completedCount = 0;
  let notCompletedCount = 0;

  myTasks.forEach((task) => {
    taskCount++;
    task.completed ? completedCount++ : notCompletedCount++;
  });

  return (
    <>
    <div id="counts">
      Total tasks: {taskCount} Tasks completed: {completedCount} Tasks
      remaining: {notCompletedCount}
    </div>
    <div id="message">{completedCount === taskCount ? "Way to go!" : "Let's get to work!"}</div>
    </>
  );
}
