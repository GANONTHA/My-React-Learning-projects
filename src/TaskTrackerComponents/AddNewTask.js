import React, { useState } from "react";
import { useTasksListContext } from "../context/ListProvider";

const AddNewTask = () => {
  const { addTask } = useTasksListContext();
  const [text, setText] = useState("");
  const [time, setTime] = useState("");
  //creating a new task
  const handleClick = (e) => {
    e.preventDefault();
    const newTask = {
      id: Math.floor(Math.random() * 10000),
      text: text,
      time: time,
    };
    addTask(newTask);
    setText(" ");
    setTime("");
  };
  return (
    <div className="add-task">
      <h3>Add new Tasks</h3>
      <form onSubmit={handleClick}>
        <fieldset>
          <div className="text">
            <label htmlFor="text">Task: </label>
            <input
              id="text"
              type="text"
              value={text}
              onChange={(e) => setText(e.target.value)}
            />
          </div>
          <div className="time">
            <label htmlFor="time">Time due: </label>
            <input
              id="time"
              type="time"
              value={time}
              onChange={(e) => setTime(e.target.value)}
            />
          </div>
          <button type="submit">Submit</button>
        </fieldset>
      </form>
    </div>
  );
};

export default AddNewTask;
