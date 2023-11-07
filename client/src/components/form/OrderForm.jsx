import { useFormik } from "formik";
import React, { useContext } from "react";
import { orderSchema } from "../../schema/schema";
import { createOrder } from "../../api";
import { useNavigate } from "react-router-dom";
import { getLoggedUser } from "../../utils/user";
import { AppContext } from "../../context/AppContextProvider";
import { burgurOptions } from "../../constants/burgurOptions";

function OrderForm() {
  const navigate = useNavigate();
  const { burgurOpt, setBurgurOpt, setOrder, burgurPrice, setBurgurPrice } =
    useContext(AppContext);
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      country: "",
      code: "",
      street: "",
      type: "",
    },
    validationSchema: orderSchema,
    onSubmit: async (values) => {
      try {
        const { id } = getLoggedUser();

        const burgerData = {};
        burgurOpt.forEach((option) => {
          burgerData[option.name] = option.count.length;
        });
        burgerData["price"] = burgurPrice.toFixed(2);
        const { resp } = await createOrder(id, values, burgerData);
        setBurgurOpt([
          {
            name: "Salad",
            price: 0.5,
            count: [],
          },
          {
            name: "Bacon",
            price: 0.7,
            count: [],
          },
          {
            name: "Cheese",
            price: 0.4,
            count: [],
          },
          {
            name: "Meat",
            price: 1.3,
            count: [],
          },
        ]);
        setBurgurPrice(4);
        setOrder((prev) => [burgerData, ...prev]);
        navigate("/orders");
      } catch (error) {
        console.log(error);
      }
    },
  });
  return (
    <div className="order-form-container form-field">
      <p>Enter your contact data.</p>
      <div>
        <input
          type="text"
          name="name"
          value={formik.values.name}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          placeholder="Your Name"
        />
        {formik.errors.name && formik.touched.name ? (
          <p className="field-error">{formik.errors.name}</p>
        ) : null}
      </div>
      <div>
        <input
          type="text"
          name="street"
          value={formik.values.street}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          placeholder="Street"
        />
        {formik.errors.street && formik.touched.street ? (
          <p className="field-error">{formik.errors.street}</p>
        ) : null}
      </div>
      <div>
        <input
          type="text"
          name="code"
          value={formik.values.code}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          placeholder="Postal Code"
        />
        {formik.errors.code && formik.touched.code ? (
          <p className="field-error">{formik.errors.code}</p>
        ) : null}
      </div>
      <div>
        <input
          type="text"
          name="country"
          value={formik.values.country}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          placeholder="Country"
        />
        {formik.errors.email && formik.touched.email ? (
          <p className="field-error">{formik.errors.email}</p>
        ) : null}
      </div>
      <div>
        <input
          type="text"
          name="email"
          value={formik.values.email}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          placeholder="Email"
        />
        {formik.errors.email && formik.touched.email ? (
          <p className="field-error">{formik.errors.email}</p>
        ) : null}
      </div>
      <div>
        <select
          name="type"
          onBlur={formik.handleBlur}
          value={formik.values.type}
          onChange={formik.handleChange}
        >
          <option value="" label="Please select one" />
          <option value="Cheapest">Cheapest</option>
          <option value="Fastest">Fastest</option>
        </select>
      </div>

      <p className="place-order" onClick={formik.handleSubmit}>
        Complete Order
      </p>
    </div>
  );
}

export default OrderForm;
