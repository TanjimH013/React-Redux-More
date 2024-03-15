import "./App.css";

import React, { useState } from "react";

import Users from "./components/Users";

import NewUser from "./components/NewUser";

import { UsersContext } from "./context/UsersContext";

const App = () => {
  const [users, setUsers] = useState([]);

  return (
    <UsersContext.Provider value={{ users, setUsers }}>
      <div className="App">
        <NewUser />
        <Users />
      </div>
    </UsersContext.Provider>
  );
};

export default App;
