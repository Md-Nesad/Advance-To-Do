import { useContext } from "react";
import { TasksContext } from "./TaskContext";
import Task from "./EditTask";

export default function TaskList() {
  const tasks = useContext(TasksContext);
  return (
    <ul>
      {tasks.map((task) => (
        <li key={task.id}>
          <Task task={task} />
        </li>
      ))}
    </ul>
  );
}
