import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../../features/tasks/tasksSlice";

function Header() {
  const dispatch = useDispatch();

  const [title, setTitle] = useState("");
  const [emptyTitle, setEmptyTitle] = useState(false);

  const [description, setDescription] = useState("");
  const [emptyDescription, setEmptyDescription] = useState(false);

  const createTaskHandler = (e: any) => {
    e.preventDefault();

    if (!title.trim()) setEmptyTitle(true);
    if (!description.trim()) setEmptyDescription(true);
    if (!title.trim() || !description.trim()) return;

    dispatch(addTask({ title, description, status: false }));
    setTitle("");
    setDescription("");
  };

  return (
    <div className="Header">
      <form onSubmit={createTaskHandler}>
        <label htmlFor="title">
          <p>Title</p>
          <input
            id="title"
            className="title"
            type="text"
            name="title"
            placeholder="Enter title"
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
              setEmptyTitle(false);
            }}
            style={{ border: emptyTitle ? "3px solid #e70000" : "2px solid #4a4a4a" }}
          />
          {emptyTitle && <p className="empty_input">This field is empty</p>}
        </label>
        <label htmlFor="description">
          <p>Description</p>
          <input
            id="description"
            type="text"
            name="description"
            placeholder="Enter description"
            value={description}
            onChange={(e) => {
              setDescription(e.target.value);
              setEmptyDescription(false);
            }}
            style={{ border: emptyDescription ? "3px solid #e70000" : "2px solid #4a4a4a" }}
          />
          {emptyDescription && <p className="empty_input">This field is empty</p>}
        </label>

        <button className="btn_create_task">Create</button>
      </form>
    </div>
  );
}

export default Header;
