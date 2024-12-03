import { useContext } from "react";
import { TasksContext } from "./TaskContext";
import Task from "./EditTask";

export default function TaskList() {
  const tasks = useContext(TasksContext);
  return (
    <ul className="px-10 py-11 text-white float-end max-lg:float-none border-l-2 bg-bgOne rounded drop-shadow-lg max-sm:px-3 max-sm:py-5 max-sm:w-96 max-lg:mt-4 max-lg:w-[480px] max-lg:p-4">
      {tasks.map((task) => (
        <li
          className="bg-bgFour mb-2 p-5 w-[500px] max-sm:w-[360px] max-sm:p-3 rounded relative drop-shadow-xl max-lg:w-[450px] "
          key={task.id}
        >
          <Task task={task} />
        </li>
      ))}
    </ul>
  );
}
