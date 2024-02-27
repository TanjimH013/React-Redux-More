import React from "react";
const Child = (props) => {
  const dataChild = "I love may parent 🥰";
  props.onChildData(dataChild);

  return (
    <div>
      <h1>{props.data}</h1>
      <h2>I am Child Components 😌</h2>
    </div>
  );
};
export default Child;
