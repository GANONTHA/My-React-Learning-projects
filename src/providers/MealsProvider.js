import React from "react";

const MealsContext = React.createContext(); //creating the context API

const todaysMeals = ["Baked beans", "Noddles", "Baked Sweet Potatos "];

const MealsProvider = ({ children }) => {
  const [meals] = React.useState(todaysMeals);
  return (
    <MealsContext.Provider value={{ meals }}>{children}</MealsContext.Provider>
  );
};

export const useMealsListContext = () => React.useContext(MealsContext); //exporting the provider component to be available to the consumers components
export default MealsProvider;
