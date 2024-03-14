import "./App.css";

import React, { useState } from "react";
import Users from "./components/Users";

const App = () => {
  const [users, setUsers] = useState([
    { id: 1, username: "Pabel" },
    { id: 2, username: "Shajib" },
    { id: 3, username: "Rayhan" },
  ]);

  const handleDeleteUser = (id) => {
    console.log(id);
  };
  return (
    <div>
      <Users users={users} handleDeleteUser={handleDeleteUser} />
    </div>
  );
};

export default App;
