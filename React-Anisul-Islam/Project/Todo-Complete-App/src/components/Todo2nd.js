import React from "react";

import style from "./Todo2nd.module.css";

const Todo2nd = (props) => {
  const { title, desc } = props.todo;

  const { id } = props;

  const handleClick = (id) => {
    props.onDeleteItem(id);
  };
  return (
    <article className={style.todo2nd}>
      <h2>👦 Todo2nd 👧</h2>
      <div>
        <h3>{title}</h3>
        <p>{desc}</p>
        <div>
          <button
            className={style.btn}
            onClick={() => {
              handleClick(id);
            }}
          >
            <i className="fa fa-trash fa-2x"> Delete </i>
          </button>
        </div>
      </div>
    </article>
  );
};

export default Todo2nd;
