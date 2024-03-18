import React from "react";

function Heading({title, para}) {
  return (
    <div className="main-div">
      <span style={{ fontSize: "100px" }}>🤖</span>
      <div>
        <h1>{title}</h1>
        <p>{para}</p>
      </div>
    </div>
  );
}

export default Heading;
