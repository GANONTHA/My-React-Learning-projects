import React from "react";
import { useActivityContext } from "../providers/ActivitiesProvider";

const Revenues = () => {
  const { Revenue } = useActivityContext();

  return (
    <div>
      Revenue
      <p>${Revenue}</p>
    </div>
  );
};

export default Revenues;
