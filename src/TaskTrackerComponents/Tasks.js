import React, { useState } from "react";
import { useTasksListContext } from "../context/ListProvider";

const Tasks = () => {
  const { tasks, deleteTask } = useTasksListContext();

  return (
    <div className="list-tasks">
      <h3>List of Task</h3>

      <ol>
        {/* <li>
          <span className="checkbox">
            <input type="checkbox" />
          </span>
          Go to market <span>18:00PM</span>
        </li>
        <li>
          Work on my project <span>10:00Am</span>
        </li>
        <li>
          Cook launch <span>13:00PM</span>
        </li> */}
        {tasks.map((task) => (
          <li onDoubleClick={() => deleteTask(task.id)} key={task.id}>
            {task.text}
            <span>
              {task.time}
              {task.time.slice(0, 2) < 12 ? " AM" : " PM"}
            </span>
          </li>
        ))}
      </ol>
    </div>
  );
};

export default Tasks;
