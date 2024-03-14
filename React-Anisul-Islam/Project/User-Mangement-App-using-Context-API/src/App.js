import "./App.css";

import React, { useState } from "react";
import Users from "./components/Users";
import NewUser from "./components/NewUser";

const App = () => {
  const [users, setUsers] = useState([]);

  const handleDeleteUser = (id) => {
    const filteredUsers = users.filter((user) => user.id !== id);
    setUsers(filteredUsers);
  };

  const handleAddNewUser = (newUser) => {
    setUsers((prevUser) => [...prevUser, newUser]);
  };
  return (
    <div>
      <NewUser handleAddNewUser={handleAddNewUser} />
      <Users users={users} handleDeleteUser={handleDeleteUser} />
    </div>
  );
};

export default App;
