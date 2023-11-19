import { useReducer } from "react";
const reducer = (state, action) => {
  switch (action.type) {
    case "BUY_INGREDIENTS":
      return {
        balance: state.balance - 10,
        expense: state.expense + 10,
      };
    case "RECEIVE_ORDER":
      return {
        balance: state.balance + 30,
        expense: state.expense,
      };
    default:
      return state;
  }
};
export function UseReducerLL() {
  const [state, dispatch] = useReducer(reducer, {
    balance: 1000,
    expense: 0,
  });
  return (
    <div>
      <h1>Little lemon Expenses tracker</h1>
      <div>
        <button onClick={() => dispatch({ type: "BUY_INGREDIENTS" })}>
          Buy Ingredients
        </button>
      </div>
      <div>
        <button onClick={() => dispatch({ type: "RECEIVE_ORDER" })}>
          Receive an order
        </button>
      </div>
      <div>
        <h2>The actual balance is:$ {state.balance}</h2>
      </div>
      <div>
        <h2>Total Expenses:$ {state.expense}</h2>
      </div>
    </div>
  );
}
