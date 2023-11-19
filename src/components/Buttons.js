import React from "react";
import { useActivityContext } from "../providers/ActivitiesProvider";

const Buttons = () => {
  const { focus, receiveOdr, celebVisit } = useActivityContext();
  return (
    <div>
      <button
        onClick={() => alert("enter details below and validate with Enter key")}
      >
        Buy Ingredients
      </button>
      <button onClick={() => receiveOdr()}>Receive Order</button>
      <button onClick={() => celebVisit()}>Celebrity visit</button>
    </div>
  );
};

export default Buttons;
