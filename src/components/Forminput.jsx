import React from "react";

function Forminput(props) {
  const arr = props.inputArr;
  return (
    <div className="add-element">
      {props.inputArr.map((x) => (
        <input
          key={x.id}
          type={x.type}
          value={x.value}
          placeholder={x.placeholder}
          onChange={(e) => x.onChange(e.target.value)}
          name={x.name}
        />
      ))}
      <button onClick={props.addEle}>{props.btnTxt}</button>
    </div>
  );
}

export default Forminput;

