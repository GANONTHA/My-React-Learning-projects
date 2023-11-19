import { useShoppingListContext } from "../providers/ShoppingProvider";
import { useRef, useState } from "react";

function ShoppingList() {
  const inputRef = useRef(null);
  const { shoppings } = useShoppingListContext();
  const [currentShopping, setCurrentShopping] = useState(shoppings);
  const addTask = (e) => {
    e.preventDefault();
    var task = inputRef.current.value;
    setCurrentShopping([task, ...currentShopping]);
    inputRef.current.value = "";
  };

  return (
    <div>
      <h1>List of Today's Shopping</h1>

      <ol>
        {currentShopping.map((shopping, index) => (
          <li key={index}>{shopping}</li>
        ))}
      </ol>
      <h2>Add some other tasks</h2>
      <form>
        <input ref={inputRef} type="text" placeholder="enter a task" />
      </form>
      <button onClick={addTask}>Add</button>
    </div>
  );
}

export default ShoppingList;
