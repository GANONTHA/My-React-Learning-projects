import React from "react";
import { useActivityContext } from "../providers/ActivitiesProvider";

const DetailsSection = () => {
  const { details } = useActivityContext();
  return (
    <div>
      <ol>
        {details.map((det) => (
          <li key={det.id}>
            {det.text} <span>{det.time}</span>
          </li>
        ))}
      </ol>
    </div>
  );
};

export default DetailsSection;
