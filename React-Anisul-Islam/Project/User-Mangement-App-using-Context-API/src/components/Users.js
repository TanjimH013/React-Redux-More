import React, { useContext } from "react";

import User from "./User";

import { UsersContext } from "../context/UsersContext";

const Users = () => {
  const { users } = useContext(UsersContext);
  return (
    <section className="users">
      {users.map((user) => (
        <User key={user.id} user={user} />
      ))}
    </section>
  );
};

export default Users;
