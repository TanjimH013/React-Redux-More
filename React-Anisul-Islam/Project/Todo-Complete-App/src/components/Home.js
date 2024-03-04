import React, { useState } from "react";

import Todos from "./Todos";

import style from "./home.module.css";

import NewTodo from "./NewTodo";

import { v4 as uuidv4 } from "uuid";

const Home = () => {
  const [homeTodos, setHomeTodos] = useState([]);

  const handleAddTod = (hometodo) => {
    setHomeTodos((prevTodos) => {
      return [...prevTodos, { id: uuidv4(), hometodo }];
    });
  };

  const handleDeleteTodo = (id) => {
    setHomeTodos((prevTodos) => {
      const filteredTodos = prevTodos.filter((todo) => todo.id !== id);
      return filteredTodos;
    });
  };

  return (
    <div className={style.container}>
      <h1 style={{ color: "white" }}>Home</h1>

      <NewTodo onAddTodo={handleAddTod} />

      <Todos todos={homeTodos} onDeleteTodo={handleDeleteTodo} />
    </div>
  );
};

export default Home;
