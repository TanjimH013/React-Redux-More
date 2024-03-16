import React from "react";
import { useUserContext } from "../Hooks/useUsersContext";

const User = ({ user }) => {
  const { dispatch } = useUserContext();

  const { id, username } = user;

  const handleDelete = (id) => {
    dispatch({ type: "DELETE_USER", payload: id });
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
