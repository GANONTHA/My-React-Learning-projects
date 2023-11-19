import { useTasksListContext } from "../context/ListProvider";

const Balances = () => {
  const { tasks, tasksCompleted } = useTasksListContext();

  return (
    <div className="balances">
      <h3>Balances</h3>
      <div className="allTasks-tasksCompleted">
        <div className="allTasks">
          <h5>All Tasks</h5>
          <p>{tasks.length}</p>
        </div>
        <div className="tasksCompleted">
          <h5>Tasks Completed</h5>
          <p>{tasksCompleted}</p>
        </div>
      </div>
    </div>
  );
};

export default Balances;
