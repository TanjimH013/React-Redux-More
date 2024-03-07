import React, { useState } from "react";

const SignIn = () => {
  const [user, setUser] = useState({ name: "", email: "", password: "" });
  const { name, email, password } = user;

  const handleChang = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(user);

    setUser({ name: "", email: "", password: "" });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h1>Registration Form</h1>
        <div>
          <label htmlFor="name">Name : </label>
          <input
            type="text"
            id="name"
            name="name"
            onChange={handleChang}
            value={name}
            required
          />
        </div>

        <div>
          <label htmlFor="email">Email : </label>
          <input
            type="text"
            id="email"
            name="email"
            onChange={handleChang}
            value={email}
            required
          />
        </div>

        <div>
          <label htmlFor="password">Password : </label>
          <input
            type="text"
            id="password"
            name="password"
            onChange={handleChang}
            value={password}
            required
          />
        </div>

        <div>
          <button type="submit">Sign In</button>
        </div>
      </form>
    </div>
  );
};

export default SignIn;
