import React from "react";

const User = ({ user, handleDeleteUser }) => {
  const { id, username } = user;

  const handleDelete = (id) => {
    handleDeleteUser(id);
  };
  return (
    <article className="user">
      <h2>{id}</h2>
      <p>{username}</p>
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
