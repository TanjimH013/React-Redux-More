import React from "react";

import CountApp from "./Components/Count";

import EventBubblingStopPropagation from "./Components/Event_bubbling_StopPropagation";

import Form from "./Components/Form";

import Form2 from "./Components/Form2";

import StateLifting from "./Components/State_lifting/StateLifting";

import Todo from "./Components/TodoApp/Todo";

import NewTodo from "./Components/TodoApp/NewTodo";

import DataFetch from "./Components/Data-Fetch";

import DynamicStyling from "./Components/Dynamic-Styling/DynamicStyling";

import "./App.css";
export default function App() {
  const handleNewTodo = (handleTodoNew) => {
    console.log(handleTodoNew);
  };
  return (
    <div className="App">
      <DynamicStyling />
      <EventBubblingStopPropagation />
      <CountApp />
      <Form />
      <Form2 />
      <StateLifting />
      <Todo title="Learn form React.js (Parent To Child Data passing)" />
      <NewTodo onHandleNewTod={handleNewTodo} />
      <DataFetch />
    </div>
  );
}
