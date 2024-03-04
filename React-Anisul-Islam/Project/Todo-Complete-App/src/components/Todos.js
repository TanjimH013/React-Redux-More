import React from "react";
import Todo2nd from "./Todo2nd";

import style from "./todos.module.css";

const Todos = (props) => {
  console.log(props.todos);
  return (
    <section className={style.todos}>
      <h2>👨 Todos 👩</h2>

      {props.todos.map((todo) => (
        <Todo2nd
          todo={todo.hometodo}
          key={todo.id}
          id={todo.id}
          onDeleteItem={props.onDeleteTodo}
        />
      ))}
    </section>
  );
};

export default Todos;
