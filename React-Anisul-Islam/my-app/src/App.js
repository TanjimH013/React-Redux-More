import React from "react";
import CountApp from "./count";
import EventBubblingStopPropagation from "./event_bubbling_StopPropgation";

export default function App() {
  return (
    <div>
      <EventBubblingStopPropagation />
      <CountApp />
    </div>
  );
}
