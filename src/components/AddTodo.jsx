import { useState, useContext } from "react";
import { TasksDispatchContext } from "./TaskContext";

export default function AddTask() {
  const [text, setText] = useState("");
  const dispatch = useContext(TasksDispatchContext);
  return (
    <header className="bg-bgThree py-20 px-10 float-start  max-lg:float-none max-sm:w-96 mr-10  shadow-slate-300 shadow-sm rounded max-sm:py-5 max-sm:mb-5 max-lg:py-10">
      <h1 className="mb-5 text-3xl text-white text-center">
        Advance To-Do-App
      </h1>{" "}
      <hr className="mb-10" />
      <input
        className="py-3 pl-2 mr-4 rounded focus:bg-bgFour focus:text-white w-72 max-sm:w-48 "
        placeholder="Add your task"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button
        className="bg-bgFour text-white rounded px-8 py-2 transition duration-300 hover:bg-green-500 hover:scale-110"
        onClick={() => {
          if (text === "") {
            return alert("Add your task first!");
          }
          setText("");
          dispatch({
            type: "added",
            id: nextId++,
            text: text,
          });
        }}
      >
        Add
      </button>
    </header>
  );
}

let nextId = 3;
