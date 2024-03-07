import { useFormik } from "formik";

const SignUp = () => {
  const formik = useFormik({
    initialValues: {
      fname: "",
      lname: "",
      email: "",
      password: "",
      passwordC: "",
    },
    onSubmit: (values, { resetForm }) => {
      console.log(values);
      resetForm({ values });
    },
  });

  return (
    <div>
      <h1>User Signup</h1>
      <div>
        <form onSubmit={formik.handleSubmit}>
          <div>
            <label htmlFor="name">First Name : </label>
            <input
              type="text"
              name="fname"
              id="fname"
              onChange={formik.handleChange}
              value={formik.values.fname}
              required
            />
          </div>
          <div>
            <label htmlFor="name">Last Name : </label>
            <input
              type="text"
              name="lname"
              id="lname"
              onChange={formik.handleChange}
              value={formik.values.lname}
              required
            />
          </div>
          <div>
            <label htmlFor="email">Email : </label>
            <input
              type="text"
              name="email"
              id="email"
              onChange={formik.handleChange}
              value={formik.values.email}
              required
            />
          </div>
          <div>
            <label htmlFor="password">Password : </label>
            <input
              type="text"
              name="password"
              id="password"
              onChange={formik.handleChange}
              value={formik.values.password}
              required
            />
          </div>
          <div>
            <label htmlFor="passwordc">Confirm Password : </label>
            <input
              type="text"
              name="passwordC"
              id="passwordC"
              onChange={formik.handleChange}
              value={formik.values.passwordC}
              required
            />
          </div>
          <div>
            <button type="submit">Sign Up</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
