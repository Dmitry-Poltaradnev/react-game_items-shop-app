import { useEffect, useContext } from "react";
import { ShopContext } from "../context";

export default function Alert() {
  const { alertName: name = "", closeAlert = Function.prototype } =
    useContext(ShopContext);
  useEffect(() => {
    const timerId = setTimeout(closeAlert, 2000);
    return () => clearTimeout(timerId);
  }, [name]);
  return (
    <div id="toast-container">
      <div className="toast">{name} - added to basket</div>
    </div>
  );
}
