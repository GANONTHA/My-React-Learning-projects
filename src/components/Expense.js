import React from "react";
import { useActivityContext } from "../providers/ActivitiesProvider";

const Expense = () => {
  const { Expenses } = useActivityContext();
  return (
    <div>
      Expenses
      <p>${Expenses}</p>
    </div>
  );
};

export default Expense;
