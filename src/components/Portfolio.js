import { Route, Routes, Link } from "react-router-dom";
import AboutMe from "./AboutMe";
import HomePage from "./HomePage";
import "../App.css";
import Services from "./Services";
import Contacts from "./Contacts";

function Portfolio() {
  return (
    <div>
      <nav className="navi-bar">
        <Link className="list" to="/">
          Home
        </Link>
        <Link className="list" to="/services">
          Services
        </Link>
        <Link className="list" to="/about-me">
          About Me
        </Link>
        <Link className="list" to="/contacts">
          Contacts
        </Link>
      </nav>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about-me" element={<AboutMe />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contacts" element={<Contacts />} />
      </Routes>
    </div>
  );
}
export default Portfolio;
