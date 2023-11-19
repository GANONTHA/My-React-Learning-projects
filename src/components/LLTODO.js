import { useState } from "react";

const ToDo = (props) => (
  <tr>
    <td>
      <label>{props.id}</label>
    </td>
    <td>
      <label>
        <input type="text" placeholder="enter your task" />
      </label>
    </td>
    <td>
      <label>{props.createAt}</label>
    </td>
  </tr>
);

function Appli() {
  const [todos, setTodo] = useState([
    {
      id: "todo1",
      createAt: "18:30",
    },
    {
      id: "todo2",
      createAt: "20:00",
    },
  ]);

  //function handle click

  const reverseOrder = () => {
    setTodo([...todos].reverse());
  };
  return (
    <div>
      <table>
        <tbody>
          {todos.map((todo, index) => (
            <ToDo id={index} key={todo.id} createAt={todo.createAt} />
          ))}
        </tbody>
      </table>
      <button onClick={reverseOrder}>Reverse Order</button>
    </div>
  );
}

export default Appli;
