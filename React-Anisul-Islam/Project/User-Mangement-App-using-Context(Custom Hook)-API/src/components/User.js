import React, { useContext } from "react";

import { UsersContext } from "../context/UsersContext";

const User = ({ user }) => {
  const { users, setUsers } = useContext(UsersContext);

  const { id, username } = user;

  const handleDelete = (id) => {
    const filteredUsers = users.filter((user) => user.id !== id);
    setUsers(filteredUsers);
  };
  return (
    <article className="user">
      <h3>{id}</h3>
      <h1>{username}</h1>
      <button
        onClick={() => {
          handleDelete(id);
        }}
      >
        Delete
      </button>
    </article>
  );
};

export default User;
