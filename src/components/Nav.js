import React from "react";
import "../index.css";

function Nav(props) {
  return (
    <nav className="nav-bar">
      <li>{props.first}</li>
      <li>{props.second}</li>
      <li>{props.third}</li>
    </nav>
  );
}
export default Nav;
