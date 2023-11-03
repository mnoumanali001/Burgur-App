import React, { useState } from "react";
import { useFormik } from "formik";
import { authSchema } from "../../schema/schema";
import "./form.css";

function AuthForm() {
  const [loginCheck, setLogin] = useState(true);
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: authSchema,
    onSubmit: (values) => {
      console.log(values);
    },
  });
  return (
    <div className="auth-form-container form-field">
      <div>
        <input
          type="text"
          name="email"
          value={formik.values.email}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          placeholder="E-mail"
        />
        {formik.errors.email && formik.touched.email ? (
          <p className="field-error">{formik.errors.email}</p>
        ) : null}
      </div>
      <div>
        <input
          type="password"
          name="password"
          value={formik.values.password}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          placeholder="Password"
        />
        {formik.errors.password && formik.touched.password ? (
          <p className="field-error">{formik.errors.password}</p>
        ) : null}
      </div>
      <p
        className={
          (formik.errors.password && formik.touched.password) ||
          (formik.errors.email && formik.touched.email)
            ? "auth-action-btn block-auth"
            : "auth-action-btn"
        }
      >
        {loginCheck ? "Sign in" : "Sign up"}
      </p>
      <p className="switch-btn" onClick={() => setLogin(!loginCheck)}>
        Switch to {loginCheck ? "Sign up" : "Sign in"}
      </p>
    </div>
  );
}

export default AuthForm;
