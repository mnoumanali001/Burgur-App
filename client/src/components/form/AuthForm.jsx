import React, { useState } from "react";
import {useNavigate} from 'react-router-dom'
import { useFormik } from "formik";
import { authSchema } from "../../schema/schema";
import "./form.css";
import { login, signup } from "../../api";
import { setUser } from "../../utils/user";

function AuthForm() {
  const [loginCheck, setLogin] = useState(true);
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: authSchema,
    onSubmit: async (values, {setFieldError}) => {
      if(loginCheck)
      {
        try {
          const {data} = await login(values);
          // save to local storage
          setUser(data)
          navigate("/");
        } catch (error) {
          if(error?.response?.data)
          {
            const err = error.response.data;
            const fields = Object.keys(err);
            setFieldError(`${fields[0]}`, `${err[fields[0]]}`);
          }
        }
      }
      else
      {
        try {
          const {data} = await signup(values);
          // save to local storage
          setUser(data)
          navigate("/");
        } catch (error) {
          if(error?.response?.data)
          {
            const err = error.response.data;
            const fields = Object.keys(err);
            setFieldError(`${fields[0]}`, `${err[fields[0]]}`);
          }
        }
      }
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
        onClick={formik.handleSubmit}
      >
        {loginCheck ? "Sign in" : "Sign up"}
      </p>
      <p className="switch-btn" onClick={() => setLogin(prev => !prev)}>
        Switch to {loginCheck ? "Sign up" : "Sign in"}
      </p>
    </div>
  );
}

export default AuthForm;
