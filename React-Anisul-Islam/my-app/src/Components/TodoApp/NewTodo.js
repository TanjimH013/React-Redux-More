import React from "react";

export default function NewTodo(props) {
  props.onHandleNewTod({ title: "I'am NewTodo 😋" });
  return (
    <div>
      <h3>NewTOdo</h3>
    </div>
  );
}
