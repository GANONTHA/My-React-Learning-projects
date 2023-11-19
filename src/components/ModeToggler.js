import { useState } from "react";

function ModeToggler() {
  var darkModeOn = false;
  var darkMode = <h1>Dark mode </h1>;
  var lightMode = <h1>Light mode</h1>;
  var [mode, setMode] = useState(false);

  function eventHandler() {
    darkModeOn = !darkModeOn;
    setMode(darkModeOn);

    // darkModeOn ? (mode = darkMode) : (mode = lightMode);
  }
  return (
    <div>
      {mode ? darkMode : lightMode}
      <button onClick={eventHandler}>click me</button>
    </div>
  );
}

export default ModeToggler;
