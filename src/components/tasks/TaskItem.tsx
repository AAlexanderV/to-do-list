import Itask from "./Itask";
import { useDispatch } from "react-redux";
import { toggleTaskStatus, deleteTask } from "../../features/tasks/tasksSlice";

function TaskItem({ task, id }: { task: Itask; id: number }) {
  const dispatch = useDispatch();

  return (
    <div className="TaskItem">
      <div>{id}</div>
      <div>{task.title}</div>
      <div>{task.description}</div>
      <div>
        <input
          type="checkbox"
          checked={task.status}
          onChange={() => {
            dispatch(toggleTaskStatus(id));
          }}
        ></input>
      </div>
      <button
        className="delete_btn"
        onClick={() => {
          dispatch(deleteTask(id));
        }}
      >
        x
      </button>
    </div>
  );
}

export default TaskItem;
