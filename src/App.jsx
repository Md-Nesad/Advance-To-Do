import AddTask from "./components/AddTodo.jsx";
import TaskList from "./components/TaskList.jsx";
import { TasksProvider } from "./components/TaskContext.jsx";
import "./App.css";

export default function TaskApp() {
  return (
    <TasksProvider>
      <AddTask />
      <TaskList />
    </TasksProvider>
  );
}
