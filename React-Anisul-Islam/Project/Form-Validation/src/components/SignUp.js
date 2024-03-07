import { useFormik } from "formik";
import * as yup from "yup";

import { useState } from "react";
import SignIn from "./SignIn";

const SignUp = () => {
  const formik = useFormik({
    initialValues: {
      fname: "",
      lname: "",
      email: "",
      password: "",
      passwordC: "",
    },
    validationSchema: yup.object({
      fname: yup.string().min(2, "Atlest 2 characters").required(),
      lname: yup.string().min(2, "Atlest 2 characters").required(),
      email: yup.string().email().required(),
      password: yup
        .string()
        .min(6, "Password must have atleast 6 characters")
        .required(),
      passwordC: yup.string().min(6, "enter your confirm password").required(),
    }),
    onSubmit: (values, { resetForm }) => {
      console.log(values);
      resetForm({ values: "" });
    },
  });

  const renderFnameErr = formik.touched.fname && formik.errors.fname && (
    <span>{formik.errors.fname}</span>
  );

  const renderLnameErr = formik.touched.lname && formik.errors.lname && (
    <span>{formik.errors.lname}</span>
  );

  const renderEmailErr = formik.touched.email && formik.errors.email && (
    <span>{formik.errors.email}</span>
  );

  const renderPasswordErr = formik.touched.password &&
    formik.errors.password && <span>{formik.errors.password}</span>;

  const renderPasswordcErr = formik.touched.passwordC &&
    formik.errors.passwordC && <span>{formik.errors.passwordC}</span>;

  const [toggle, setToggle] = useState(false);

  return (
    <>
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
              <br />
              {renderFnameErr}
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
              <br />
              {renderLnameErr}
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
              <br />
              {renderEmailErr}
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
              <br />
              {renderPasswordErr}
            </div>

            <div>
              <label htmlFor="password">Confirm Password : </label>
              <input
                type="text"
                name="passwordC"
                id="passwordC"
                onChange={formik.handleChange}
                value={formik.values.passwordC}
                required
              />
              <br />
              {renderPasswordcErr}
            </div>

            <div>
              <button
                type="submit"
                onClick={() => {
                  setToggle(!toggle);
                }}
              >
                Sign Up
              </button>
            </div>
          </form>
        </div>
      </div>
      <section>{toggle && <SignIn />}</section>
    </>
  );
};

export default SignUp;
