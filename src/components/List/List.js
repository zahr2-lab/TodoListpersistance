import React, { useState } from "react";
import "./list.scss";
import { atom, atomFamily, useRecoilValue, useRecoilState } from "recoil";

export const tasksState = atom({
  key: "tasks",
  default: []
});

const taskState = atomFamily({
  key: "task",
  default: {
    id: "",
    todo: "",
    complete: false
  }
});

const ListItem = ({ task }) => {
  const [{ id, todo, complete }, setTask] = useRecoilState(taskState(task.id));
  const [editable, setEditable] = useState(false);
  const [value, setValue] = useState(task.todo);

  const focusOut = (value) => {
    setEditable(false);
    setTask({ id, complete, todo: value });
  };
  return (
    <div className="list-item">
      <input
        className="list-check"
        type="checkbox"
        onChange={() => setTask({ id, todo, complete: !complete })}
      />
      {!complete && editable ? (
        <input
          className="list-editable"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          onBlur={() => focusOut(value)}
          onKeyPress={(e) => e.key === "Enter" && focusOut(value)}
          type="text"
          autoFocus
        />
      ) : (
        <div onClick={() => setEditable(!editable)} className="list-text">
          <div className={complete && "complete"}>{value}</div>
        </div>
      )}
    </div>
  );
};

export default function List() {
  const tasks = useRecoilValue(tasksState);

  return (
    <div className="list">
      {tasks.map((task) => (
        <ListItem key={task.id} task={task} />
      ))}
    </div>
  );
}
