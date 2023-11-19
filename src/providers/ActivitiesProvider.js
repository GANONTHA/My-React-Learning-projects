import React, { createContext, useContext } from "react";
import { useReducer } from "react";

const initialState = {
  Revenue: 100,
  Expenses: 0,
  details: [
    // { text: "" }, { id: -1 }, { time: 0 }
  ],
};
const reducer = (state, action) => {
  switch (action.type) {
    case "BUY_INGREDIENT":
      return {
        Revenue: state.Revenue - 10,
        Expenses: state.Expenses + 10,
        details: [...state.details, action.payload],
      };
    case "RECEIVE_ORDER":
      return {
        ...state,
        Revenue: state.Revenue + 30,
      };
    case "CELEBRITY_VISIT":
      return {
        ...state,
        Revenue: state.Revenue + 5000,
      };
    default:
      return state;
  }
};
const ActivityContext = createContext();
const ActivitiesProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  function buyIng(action) {
    dispatch({
      type: "BUY_INGREDIENT",
      payload: action,
    });
  }
  function receiveOdr() {
    dispatch({
      type: "RECEIVE_ORDER",
      payload: null,
    });
  }
  function celebVisit() {
    dispatch({
      type: "CELEBRITY_VISIT",
      payload: null,
    });
  }

  return (
    <ActivityContext.Provider
      value={{
        Revenue: state.Revenue,
        Expenses: state.Expenses,
        details: state.details,
        celebVisit,
        buyIng,
        receiveOdr,
      }}
    >
      {children}
    </ActivityContext.Provider>
  );
};

export default ActivitiesProvider;
export const useActivityContext = () => useContext(ActivityContext);
