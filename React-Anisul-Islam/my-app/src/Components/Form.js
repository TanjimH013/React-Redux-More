import style from "./form.module.css";
import { useState } from "react";

export default function Form() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleChangeName = (e) => {
    setName(e.target.value);
  };
  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
  };
  const handleChangePassword = (e) => {
    setPassword(e.target.value);
  };
  const handleSubmit = (e) => {
    console.log("form is submitted");
    let userInfo = {
      name: name,
      email: email,
      password: password,
    };
    console.log(userInfo);
    e.preventDefault();
  };
  return (
    <>
      <div className={style.formGroup}>
        <h1>Registration</h1>
        <form action="" onSubmit={handleSubmit}>
          <div className={style.formGroup}>
            <label htmlFor="name">Name: </label>
            <input
              type="text"
              name="name"
              id="name"
              value={name}
              required
              onChange={handleChangeName}
            />
          </div>

          <div className={style.formGroup}>
            <label htmlFor="email">Email: </label>
            <input
              type="email"
              name="email"
              id="email"
              value={email}
              required
              onChange={handleChangeEmail}
            />
          </div>

          <div className={style.formGroup}>
            <label htmlFor="password">Password: </label>
            <input
              type="password"
              name="password"
              id="password"
              value={password}
              required
              onChange={handleChangePassword}
            />
          </div>

          <div className={style.formGroup}>
            <button type="submit">Register</button>
          </div>
        </form>
      </div>
    </>
  );
}
