import React, { useRef, useState } from "react";
import "../App.css";
import { useActivityContext } from "../providers/ActivitiesProvider";

const Details = () => {
  const [text, setText] = useState("");
  const [amount, setAmout] = useState(0);
  const inputRef = useRef(null);
  const { buyIng } = useActivityContext();

  //function to format time
  function getTime() {
    const timeElapsed = Date.now();
    const today = new Date(timeElapsed);
    return today.toUTCString();
  }

  //function that handles even
  function handleEven() {
    const newAction = {
      id: Math.floor(Math.random() * 1000),
      text: text,
      time: getTime(),
    };
    buyIng(newAction);
    inputRef.current.focus();
    setText("");
  }
  return (
    <div className="details">
      <label htmlFor="details">What have you bought?</label>
      <input
        ref={inputRef}
        id="details"
        type="text"
        value={text}
        className="detail-inputs"
        onKeyDown={(e) => (e.keyCode === 13 ? handleEven(text) : null)}
        onChange={(e) => setText(e.target.value)}
      />
    </div>
  );
};

export default Details;
