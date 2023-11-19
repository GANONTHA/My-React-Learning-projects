import React, { useState } from "react";

//create the contect API

const ShoppingContext = React.createContext();

//define the shopping lists
const shoppingList = ["A phone", "Furnitures", "Commodities"];

const ShoppingProvider = ({ children }) => {
  const [shoppings] = React.useState(shoppingList);

  return (
    <ShoppingContext.Provider value={{ shoppings }}>
      {children}
    </ShoppingContext.Provider>
  );
};

export const useShoppingListContext = () => React.useContext(ShoppingContext);

export default ShoppingProvider;
