import { useState } from "react";
import style from "./form.module.css";

export default function Form2() {
  const [user, setUser] = useState({ name: "", email: "", password: "" });
  const { name, email, password } = user;

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    console.log("From has Submitted");
    console.log(user);
    e.preventDefault();
  };

  return (
    <>
      <div className={style.formGroup}>
        <form action="" onSubmit={handleSubmit}>
          <h1>New Registration</h1>
          <div className={style.formGroup}>
            <label htmlFor="name">Name: </label>
            <input
              type="text"
              name="name"
              id="name"
              value={name}
              onChange={handleChange}
              required
            />
          </div>

          <div className={style.formGroup}>
            <label htmlFor="email">Email: </label>
            <input
              type="email"
              name="email"
              id="email"
              value={email}
              onChange={handleChange}
              required
            />
          </div>

          <div className={style.formGroup}>
            <label htmlFor="password">Password: </label>
            <input
              type="password"
              name="password"
              id="password"
              value={password}
              onChange={handleChange}
              required
            />
          </div>

          <div className={style.formGroup}>
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
    </>
  );
}
