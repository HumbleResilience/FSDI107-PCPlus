import { useState } from "react";
import "./quantityPicker.css";

const QuantityPicker = () => {
  const [quantity, setQuantity] = useState(1);

  const increment = () => {
    //add
    console.log("example");

    setQuantity(quantity + 1);
  };

  const decrement = () => {
    //subtract

    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <div className="quantityPicker">
      <button  className="btn btn-sm btn-dark"onClick={decrement}>-</button>
      <label>{quantity}</label>
      <button className="btn btn-sm btn-dark" onClick={increment}>+</button>
    </div>
  );
}

export default QuantityPicker;
