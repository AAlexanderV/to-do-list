import Itask from "./Itask";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { toggleTaskStatus, deleteTask } from "../../features/tasks/tasksSlice";
import Modal from "./Modal";

function TaskItem({ task, id }: { task: Itask; id: number }) {
  const dispatch = useDispatch();
  const [openModal, setOpenModal] = useState(false);

  return (
    <div className="TaskItem">
      <div className="item_id">{id + 1 + "."}</div>
      <div
        className="item_title"
        onClick={() => setOpenModal(true)}
      >
        {task.title}
      </div>
      <div
        className="item_description"
        onClick={() => setOpenModal(true)}
      >
        {task.description}
      </div>
      <div className="item_status">
        <input
          type="checkbox"
          checked={task.status}
          onChange={() => dispatch(toggleTaskStatus(id))}
        ></input>
        <button
          className="delete_btn"
          onClick={() => dispatch(deleteTask(id))}
        >
          x
        </button>
      </div>
      <Modal
        task={task}
        id={id}
        open={openModal}
        onClose={() => setOpenModal(false)}
      />
    </div>
  );
}

export default TaskItem;
