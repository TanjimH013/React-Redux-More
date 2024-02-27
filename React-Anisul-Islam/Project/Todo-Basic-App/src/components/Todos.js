import React from "react";
import Todo from "./Todo";

export default function todos(props) {
  console.log(props.todos);
  return (
    <div>
      {props.todos.map((todo, index) => (
        <Todo key={index} todo={todo} />
      ))}
    </div>
  );
}
