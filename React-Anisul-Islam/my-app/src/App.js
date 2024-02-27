import React from "react";
import CountApp from "./Components/Count";
import EventBubblingStopPropagation from "./Components/Event_bubbling_StopPropagation";
import Form from "./Components/Form";
import Form2 from "./Components/Form2";

export default function App() {
  return (
    <div>
      <EventBubblingStopPropagation />
      <CountApp />
      <Form />
      <Form2 />
    </div>
  );
}
