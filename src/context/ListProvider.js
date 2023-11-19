import React from "react";
import { createContext, useReducer } from "react";

function reducer(state, action) {
  switch (action.type) {
    case "ADD_TASK":
      return {
        ...state,
        tasks: [...state.tasks, action.payload],
      };
    case "DELETE_TASK":
      return {
        ...state,
        tasksCompleted: state.tasksCompleted + 1,
        tasks: state.tasks.filter((task) => task.id !== action.payload),
      };
    default:
      return state;
  }
}
const TaskContext = React.createContext();
const initialState = {
  tasks: [
    // { id: 1, text: "Go to gym", time: "8:00Pm" },
    // { id: 2, text: "Finish my project work", time: "10:00Pm" },
    // { id: 3, text: "Go to visit family", time: "10:00AM" },
    // { id: 2, text: "DO some code", time: "11:00Pm" },
  ],
  tasksCompleted: 0,
};

const ListProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  function addTask(task) {
    dispatch({
      type: "ADD_TASK",
      payload: task,
    });
  }
  function deleteTask(id) {
    dispatch({
      type: "DELETE_TASK",
      payload: id,
    });
  }
  return (
    <TaskContext.Provider
      value={{
        tasks: state.tasks,
        tasksCompleted: state.tasksCompleted,
        addTask,
        deleteTask,
      }}
    >
      {children}
    </TaskContext.Provider>
  );
};

export default ListProvider;

export const useTasksListContext = () => React.useContext(TaskContext);
