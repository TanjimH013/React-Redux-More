import React, { useEffect, useState } from "react";

const DataFetch = () => {
  const [todos, setTodos] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((res) => {
        if (!res.ok) {
          throw Error("fetching is not successful");
        } else {
          return res.json();
        }
      })
      .then((data) => {
        setTodos(data);
        setIsLoading(false);
        setError(null);
      })
      .catch((error) => {
        setError(error.message);
        setIsLoading(false);
      });
  }, []);

  const todosElement =
    todos &&
    todos.map((todo) => {
      return <p key={todo.id}>{todo.title}</p>;
    });

  const loadingMessage = "Data is loading.... 🥱";

  return (
    <div>
      <h1>Todos</h1>
      {error && <h1>{error}</h1>}
      <h1>{isLoading && loadingMessage}</h1>
      {todosElement}
    </div>
  );
};

export default DataFetch;
