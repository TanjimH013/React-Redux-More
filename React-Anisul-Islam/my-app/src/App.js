import React from "react";

import CountApp from "./Components/Count";

import EventBubblingStopPropagation from "./Components/Event_bubbling_StopPropagation";

import Form from "./Components/Form";

import Form2 from "./Components/Form2";

import StateLifting from "./Components/State_lifting/State_lifting";

import Child from "./Child";

export default function App() {
  return (
    <div>
      <EventBubblingStopPropagation />
      <CountApp />
      <Form />
      <Form2 />
      <StateLifting />
      <Child />
    </div>
  );
}
