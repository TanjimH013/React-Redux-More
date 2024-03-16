import React from "react";

import User from "./User";

import { useUserContext } from "../Hooks/useUsersContext";

const Users = () => {
  const { state } = useUserContext();
  return (
    <section className="users">
      {state.users.map((user) => (
        <User key={user.id} user={user} />
      ))}
    </section>
  );
};

export default Users;
