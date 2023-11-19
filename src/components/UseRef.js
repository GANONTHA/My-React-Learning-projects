import { useRef } from "react";

function UseReff() {
  const inputRef = useRef(null);
  function handleClick() {
    inputRef.current.focus();
  }
  return (
    <div>
      <input ref={inputRef} />
      <button onClick={handleClick}>Focus</button>
    </div>
  );
}

export default UseReff;
