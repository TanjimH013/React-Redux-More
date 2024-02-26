export default function EventBubblingStopPropagation() {
  const handleParentClick = (event) => {
    console.log("Parent fired: ", event);
  };

  const handleChildClick = (event) => {
    event.stopPropagation();
    console.log("Child fired: ", event);
  };

  return (
    <div onClick={handleParentClick}>
      <h1>Welcome everyone 🤗</h1>
      <button onClick={handleChildClick}>Click</button>
    </div>
  );
}
