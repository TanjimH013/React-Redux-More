import React, { useContext, useState } from "react";

import { UsersContext } from "../context/UsersContext";

const NewUser = () => {
  const { setUsers } = useContext(UsersContext);
  const [username, setUserName] = useState("");

  const handleChange = (e) => {
    setUserName(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newUser = { id: new Date().getTime().toString(), username: username };
    setUsers((prevUser) => [...prevUser, newUser]);
    setUserName("");
  };

  return (
    <div className="newUser">
      <h1>User Registration</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="username"
          value={username}
          onChange={handleChange}
          required
          className="inputField"
        />
        <button type="submit">Add User</button>
      </form>
    </div>
  );
};

export default NewUser;
