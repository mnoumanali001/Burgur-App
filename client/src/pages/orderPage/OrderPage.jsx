import React, { useContext, useEffect } from "react";
import Order from "../../components/order/Order";
import "./orderpage.css";
import { getAllOrder } from "../../api";
import { getLoggedUser } from "../../utils/user";
import { AppContext } from "../../context/AppContextProvider";
function OrderPage() {
  const { id } = getLoggedUser();
  const { orders, setOrder } = useContext(AppContext);
  useEffect(() => {
    try {
      async function fetchOrder() {
        const { data } = await getAllOrder(id);
        setOrder(data);
      }
      fetchOrder();
    } catch (error) {
      console.error(error);
    }
  }, []);
  return (
    <div className="order-page-container">
      {orders?.map((item, i) => {
        return <Order item={item} key={i} />;
      })}
    </div>
  );
}

export default OrderPage;
