import { useState } from "react";

export default function CountApp() {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount((previousCount) => previousCount + 1);
  };

  return (
    <div>
      <h1>Count : {count}</h1>
      <button onClick={handleIncrement}>+</button>
    </div>
  );
}
