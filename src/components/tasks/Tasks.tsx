import { useSelector, useDispatch } from "react-redux";
import { addTask } from "../../features/tasks/tasksSlice";
import TaskItem from "./TaskItem";
import Itask from "./Itask";

function Tasks() {
  const tasks = useSelector((state: any) => state.tasks);
  const dispatch = useDispatch();

  return (
    <div className="Tasks">
      <header>
        <h2 className="header_id">ID</h2>
        <h2 className="header_title">Title</h2>
        <h2 className="header_description">Description</h2>
        <h2 className="header_status">Status</h2>
      </header>
      <div className="tasks_list">
        {tasks.map((task: Itask, index: number) => (
          <TaskItem
            task={task}
            id={index}
            key={index}
          />
        ))}
      </div>
    </div>
  );
}

export default Tasks;
