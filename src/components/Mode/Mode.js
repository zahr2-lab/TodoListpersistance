import React from "react";
import "./mode.scss";
import { atom, useRecoilState } from "recoil";

export const darkModeState = atom({
  key: "darkMode",
  default: true
});

export default function Mode() {
  const [day, setDay] = useRecoilState(darkModeState);
  return (
    <div className={`mood ${day && "day"}`} onClick={() => setDay(!day)}>
      <div className="mood-icon">
        {day ? <div>&#9737;</div> : <div>&#127769;</div>}
      </div>
      <div className="mood-btn"></div>
    </div>
  );
}
