import * as Yup from "yup";

export const authSchema = Yup.object().shape({
  email: Yup.string()
    .email("Please enter a valid Email")
    .required("Email is Required."),
  password: Yup.string()
    .min(7, "Please Enter valid Password")
    .required("Password is Required."),
});

export const orderSchema = Yup.object().shape({
  name: Yup.string()
    .min(5, "Please enter a valid name!")
    .required("Name is required!"),
  street: Yup.string().required("Please enter a valid street!"),
  code: Yup.string()
    .min(5, "Please a valid zipcode")
    .max(5, "Please a valid zipcode")
    .required("Postal Code is required!"),
  country: Yup.string().required("Please enter a valid country!"),
  email: Yup.string()
    .email("Please enter a valid email!")
    .required("Email is required!"),
  type: Yup.string().required("Required!"),
});
