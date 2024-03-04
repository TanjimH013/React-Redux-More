import React, { useState } from "react";

import style from "./newTodo.module.css";

const NewTodo = (props) => {
  const [todo, setTodo] = useState({ title: "", desc: "" });

  const { title, desc } = todo;

  const handleChange = (e) => {
    const name = e.target.name;
    setTodo((previousTodo) => {
      return { ...previousTodo, [name]: e.target.value };
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    props.onAddTodo(todo);
    setTodo({ title: "", desc: "" });
  };

  return (
    <form className={style.form} onSubmit={handleSubmit}>
      <div className={style["form-field"]}>
        <label htmlFor="title">Title: </label>
        <input
          type="text"
          name="title"
          id="tile"
          value={title}
          onChange={handleChange}
        />
      </div>
      <div className={style["form-field"]}>
        <label htmlFor="desc">Description: </label>
        <textarea
          type="text"
          name="desc"
          id="desc"
          value={desc}
          onChange={handleChange}
        />
      </div>
      <button type="submit">Add todo</button>
    </form>
  );
};

export default NewTodo;
