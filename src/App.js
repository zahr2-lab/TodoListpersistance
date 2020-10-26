import React from "react";
import "./styles.scss";
import List from "./components/List/List";
import Input from "./components/Input/Input";
import Mode, { darkModeState } from "./components/Mode/Mode";
import { useRecoilValue } from "recoil";

export default function App() {
  const day = useRecoilValue(darkModeState);
  return (
    <div className={`App ${!day && "dark"}`}>
      <h1 className="title">ToDo List</h1>
      <Mode />
      <List />
      <Input />
    </div>
  );
}
