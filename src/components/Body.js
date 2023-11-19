import React from "react";
import "../App.css";
import Revenues from "./Revenues";
import ActivitiesProvider from "../providers/ActivitiesProvider";
import Expense from "./Expense";
import Details from "./Details";
import Buttons from "./Buttons";
import DetailsSection from "./DetailsSection";

const Body = () => {
  return (
    <ActivitiesProvider>
      <h4>Accounts</h4>
      <div className="revenue-expenses">
        <div className="rev">
          {/* Renevue
          <p>$</p> */}
          <Revenues />
        </div>
        <div className="exp">
          {/* Expenses
          <p>$</p> */}
          <Expense />
        </div>
      </div>
      <div className="btn">
        <Buttons />
      </div>
      <Details />
      <DetailsSection />
    </ActivitiesProvider>
  );
};

export default Body;
