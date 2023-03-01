import Itask from "./Itask";
import { useDispatch } from "react-redux";
import { toggleTaskStatus } from "../../features/tasks/tasksSlice";

function Modal({
  task,
  id,
  open,
  onClose,
}: {
  task: Itask;
  id: number;
  open: boolean;
  onClose: any;
}) {
  const dispatch = useDispatch();

  if (!open) return null;

  return (
    <div className="overlay">
      <div className="modal_container">
        <div className="modal_header">
          <h1>{task.title}</h1>
        </div>

        <div className="modal_main">
          <h2>Description:</h2>
          <p>{task.description}</p>

          <div className="modal_status">
            <p>Status: </p>
            <input
              type="checkbox"
              checked={task.status}
              onChange={() => dispatch(toggleTaskStatus(id))}
            ></input>
          </div>
        </div>

        <button
          className="modal_close_btn"
          onClick={onClose}
        >
          Close
        </button>
      </div>
    </div>
  );
}

export default Modal;
