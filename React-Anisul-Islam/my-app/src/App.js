import React from "react";
import CountApp from "./Components/Count";
import EventBubblingStopPropagation from "./Components/Event_bubbling_StopPropagation";
import Form from "./Components/Form";

export default function App() {
  return (
    <div>
      <EventBubblingStopPropagation />
      <CountApp />
      <Form />
    </div>
  );
}
