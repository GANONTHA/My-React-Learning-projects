import me from "../assets/bruno.jpg";
import "../App.css";

function AboutMe() {
  return (
    <div className="about-me">
      <h1>About Me</h1>
      <p>This is a picture of me</p>
      <img height={200} alt="A picture of me" src={me} />
    </div>
  );
}
export default AboutMe;
