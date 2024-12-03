import { useState, useContext } from "react";
import { TasksDispatchContext } from "./TaskContext";

export default function Task({ task }) {
  const [isEditing, setIsEditing] = useState(false);
  const dispatch = useContext(TasksDispatchContext);
  let taskContent;
  if (isEditing) {
    taskContent = (
      <>
        <input
          className="text-black ml-2 rounded py-1 pl-1 max-sm:py-0"
          value={task.text}
          onChange={(e) => {
            dispatch({
              type: "changed",
              task: {
                ...task,
                text: e.target.value,
              },
            });
          }}
        />
        <button
          className="bg-bgThree px-4 absolute top-5 right-24 transition duration-300 hover:bg-green-500 hover:scale-110 rounded-sm py-1 max-sm:top-2 max-sm:right-2 max-sm:z-10"
          onClick={() => setIsEditing(false)}
        >
          Save
        </button>
      </>
    );
  } else {
    taskContent = (
      <>
        {task.text}
        <button
          className="bg-bgThree px-5 py-1 absolute top-5 right-24 transition duration-300 hover:bg-green-500 hover:scale-110 rounded max-sm:top-2 max-sm:right-20 max-sm:px-4"
          onClick={() => setIsEditing(true)}
        >
          Edit
        </button>
      </>
    );
  }
  return (
    <label>
      <input
        className="mr-2 cursor-pointer"
        type="checkbox"
        checked={task.done}
        onChange={(e) => {
          dispatch({
            type: "changed",
            task: {
              ...task,
              done: e.target.checked,
            },
          });
        }}
      />
      {taskContent}
      <button
        className="bg-bgThree px-3 py-1 absolute top-5 right-4 transition duration-300 hover:bg-red-500 hover:scale-110 rounded  max-sm:top-2 max-sm:right-1"
        onClick={() => {
          dispatch({
            type: "deleted",
            id: task.id,
          });
        }}
      >
        Delete
      </button>
    </label>
  );
}
