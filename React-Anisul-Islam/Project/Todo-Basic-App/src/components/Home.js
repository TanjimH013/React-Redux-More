import React, { useState } from "react";
import Todos from "./Todos";
import NewTodo from "./NewTodo";

const dummyTodos = ["todo1", "todo2"];

export default function Home() {
  const [todos, setTodos] = useState(dummyTodos);

  const handleTodo = (newTodo) => {
    setTodos([...todos, newTodo]);
  };

  return (
    <div>
      <Todos todos={todos} />
      <NewTodo onTodo={handleTodo} />
    </div>
  );
}
