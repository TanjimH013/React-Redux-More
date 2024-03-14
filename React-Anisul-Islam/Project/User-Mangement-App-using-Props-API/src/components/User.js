import React from "react";

const User = ({ user, handleDeleteUser }) => {
  const { id, username } = user;

  const handleDelete = (id) => {
    handleDeleteUser(id);
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
