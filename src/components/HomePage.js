import MessageOfTheDay from "./MessageOfTheDay";
import { useState } from "react";
import "../App.css";

function HomePage() {
  const [counter, setCounter] = useState(0);
  function increaseCounter() {
    setCounter(counter + 1);
  }
  function decreaseCounter() {
    setCounter(counter - 1);
  }
  return (
    <div className="home-page">
      <h1>Welcome to my site</h1>
      <MessageOfTheDay />
      <p>Click on the button to play with the counter</p>
      <button onClick={decreaseCounter}>-</button>

      <p>{counter}</p>
      <button onClick={increaseCounter}>+</button>
    </div>
  );
}
export default HomePage;
