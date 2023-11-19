import Nav from "./components/Nav";
import Calculator from "./components/Calculator";
import ModeToggler from "./components/ModeToggler";
import "./App.css";
import Child from "./components/Child";
import React, { useState } from "react";
import MealsList from "./components/MealsList";
import MealsProvider from "./providers/MealsProvider";
import AboutMe from "./components/AboutMe";
import HomePage from "./components/HomePage";
import { Routes, Route, Link } from "react-router-dom";
import ShoppingProvider from "./providers/ShoppingProvider";
import ShoppingCounter from "./components/ShoppingCounter";
import ShoppingList from "./components/ShoppingList";
import Portfolio from "./components/Portfolio";
import UseReducer from "./components/UseReducer";
import UseReff from "./components/UseRef";
import List from "./components/List";
import Appli from "./components/LLTODO";
import Form from "./components/Form";
import LLFeddbackForm from "./components/LLFeedbackForm";
import Blog from "./components/Blog";
import UseEffect from "./components/UseEffect";
import { UseReducerLL } from "./components/UseReducerLL";
import Composition from "./components/Composition";
import Test from "./Test";
import Heading from "./TaskTrackerComponents/Heading";
import Balances from "./TaskTrackerComponents/Balances";
import Tasks from "./TaskTrackerComponents/Tasks";
import AddNewTask from "./TaskTrackerComponents/AddNewTask";
import ListProvider from "./context/ListProvider";
import Body from "./components/Body";
// function Btn() {
//   const clickHander = () => console.log("clicked");
//   return <button onClick={clickHander}>Click me</button>;
// }

// function Btn() {
//   const clickHander = () => console.log("Mouse Over");
//   return <button onMouseOver={clickHander}>Click me</button>;
// }

// function Logo() {
//   var userPic = <img src={profilepic} />;
//   return userPic;
// }

function App() {
  // const [word, setWord] = React.useState("Eat");
  // function handleClick() {
  //   setWord("Drink");
  // }
  const [inputVal, setInputVal] = useState("Bruno");

  const updateValue = (e) => {
    let newval = e.target.value;
    setInputVal(newval);
  };
  return (
    <div>
      {/* <h1>MY TASKS TRAKER</h1> */}
      <h2>THE LITTLE LEMON RESTAURANT</h2>
      {/* <MealsProvider> **  CONTEXT API *** TO BE TAKEN SERIOUSLY
        <MealsList />
        <Counter />
      </MealsProvider> */}
      {/* <nav className="nav-bar">
        <Link to="/">Homepage</Link>
        <Link to="/about-me">About me</Link>
      </nav>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about-me" element={<AboutMe />} />
      </Routes> */}
      {/* <Calculator /> */}
      {/* <ShoppingProvider>
        <ShoppingList />
        <ShoppingCounter />
      </ShoppingProvider> */}
      {/* <Portfolio /> */}
      {/* <input placeholder="enter a text here" onChange={updateValue} />{" "}
      <h1>{inputVal}</h1> */}
      {/* <UseReducer />
      <UseReff /> */}
      {/* <List /> */}
      {/* <Appli />
      <Form />
      <LLFeddbackForm /> */}

      {/* <Blog /> */}
      {/* <UseEffect />
      <UseReducerLL />
      <Composition />
      <Test /> */}
      {/* <ListProvider>
        <Heading />
        <Balances />
        <Tasks />
        <AddNewTask />
      </ListProvider> */}
      <Body />
    </div>
  );
}

export default App;
