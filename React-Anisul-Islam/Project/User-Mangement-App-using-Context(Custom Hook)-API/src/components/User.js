import React from "react";
import { useUserContext } from "../Hooks/useUsersContext";

const User = ({ user }) => {
  const { users, setUsers } = useUserContext();

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
