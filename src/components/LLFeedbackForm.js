import { useState } from "react";
function LLFeddbackForm() {
  const [score, setScore] = useState("10");
  const [comment, setComment] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (Number(score) <= 5 && comment.length <= 10) {
      alert("please provide a comment longer than that one");
      return;
    }
    setComment("");
    setScore("10");
    // console.log("Submitted");
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <fieldset>
          <h2>Feedback form</h2>
          <div>
            <label>Score: {score}</label>
            <input
              type="range"
              max="10"
              min="0"
              value={score}
              onChange={(e) => setScore(e.target.value)}
            />
          </div>
          <div>
            <label>Comment: </label>
            <textarea
              value={comment}
              onChange={(e) => setComment(e.target.value)}
            />
          </div>
          <button disabled={comment.length < 5} type="submit">
            Submit
          </button>
        </fieldset>
      </form>
    </div>
  );
}

export default LLFeddbackForm;
