import React, { useState } from "react";
import "./input.scss";
import { useRecoilState } from "recoil";
import { tasksState } from "../List/List";

export default function Input() {
  const [text, setText] = useState("");
  const [tasks, setTasks] = useRecoilState(tasksState);

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        text !== "" &&
          setTasks([
            ...tasks,
            { id: tasks.length + 1, todo: text, complete: false }
          ]);
        setText("");
      }}
    >
      <input
        className="input"
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
    </form>
  );
}
