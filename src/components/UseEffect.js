import { useState, useEffect } from "react";

const UseEffect = () => {
  const [text, setText] = useState(false);
  function handleClick() {
    setText(!text);
  }
  useEffect(() => {
    document.title = text ? "Welcome to little lemon" : "Using use Effect";
  }, []);
  return (
    <div>
      <button onClick={handleClick}>Toggle</button>
      {text && <h1>Welcome to little lemon</h1>}
    </div>
  );
};

export default UseEffect;
