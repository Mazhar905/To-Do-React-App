import React from "react";
import { Check, X, Edit3 } from "react-feather";
function Items({ clickMe, title, desc, removeEle, makeComplete, isComplete }) {
  return (
    <div className="taskCard">
      <div className="taskContent">
        <h3>{title}</h3>
        <p> {desc}</p>
      </div>
      <div className="actionBtn">
        {isComplete ? (
          <span className="secondSpan">Completed</span>
        ) : (
          <>
            <span onClick={removeEle}>
              <X />
            </span>
            <span onClick={makeComplete}>
              <Check />
            </span>
            <span onClick={clickMe}>
              <Edit3 />
            </span>
          </>
        )}
      </div>
    </div>
  );
}

export default Items;
