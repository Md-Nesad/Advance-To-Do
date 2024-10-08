import AddTask from "./components/AddTodo.jsx";
import TaskList from "./components/TaskList.jsx";
import { TasksProvider } from "./components/TaskContext.jsx";

export default function TaskApp() {
  return (
    <TasksProvider>
      <h1>Day off in Kyoto</h1>
      <AddTask />
      <TaskList />
    </TasksProvider>
  );
}
