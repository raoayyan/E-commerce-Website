import "./checkout.style.scss";
import { useContext } from "react";
import { CartContext } from "../../context/cart.context";

// import CheckOutItem from "..//checkout-item/checkout-item.component";
import CheckOutItem from '../../component/checkout-item/checkout-item.component'
const CheckOut = () => {
  const { cartItems ,carttotal} =
    useContext(CartContext);

  return (
    <div className="checkout-container">
      <div className="checkout-header">
        <div className="header-block">
          <span>Product</span>
        </div>

        <div className="header-block">
          <span>Description</span>
        </div>

        <div className="header-block">
          <span>quantity</span>
        </div>

        <div className="header-block">
          <span>Price</span>
        </div>

        <div className="header-block">
          <span>Remove</span>
        </div>

       
      </div>
      {
        cartItems.map((item)=>
            <CheckOutItem key={item.id} cartItem={item} />
            
        )
      }
      <span className="Total">Total: ${carttotal}</span>
    </div>
  );
};

export default CheckOut;

// <div>


// </div>
