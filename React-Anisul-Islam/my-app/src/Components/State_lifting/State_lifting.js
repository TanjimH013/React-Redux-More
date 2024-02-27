import React from "react";
import Child from "./Child";
export default function StateLifting() {
  const data = "Hi! I am your parent 😎";

  const handleChildData = (childData) => {
    console.log(childData);
  };

  return (
    <div>
      <Child data={data} onChildData={handleChildData} />
    </div>
  );
}
