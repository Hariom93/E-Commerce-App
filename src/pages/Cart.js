import { useSelector } from "react-redux"
import { NavLink, useNavigate } from "react-router-dom";
import CartItem from "../components/CartItem";
import { useEffect, useState } from "react";


const Cart = () => {
  const { cart } = useSelector((state) => state);
  console.log(cart);
  const [totalAmount, setTotalAmount] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    setTotalAmount(cart.reduce((acc, curr) => acc + curr.price, 0));
  }, [cart])

  function btnhandler() {
    navigate("/signin")
  }

  return (
    <div className="h-[140vh]">
      {
        cart.length > 0 ?
          (<div className="flex flex-wrap lg:gap-20 lg:justify-center">
            <div>
              {
                cart.map((item, index) => {
                  return <CartItem key={item.id} item={item} itemindex={index} />
                })
              }
            </div>
            <div className="flex flex-col justify-around lg:gap-40 mx-3">
              <div>
                <div className="font-semibold lg:text-lg text-sm text-green-800 uppercase ">Your cart</div>
                <div className="font-bold lg:text-4xl text-2xl text-green-700 uppercase mb-3">Summary</div>
                <p>
                  <span className="font-semibold lg:text-lg text-md ">Total Items : {cart.length}</span>
                </p>
              </div>
              <div>
                <p className="font-semibold lg:text-lg text-md">Total Amount : <span className="font-bold">${totalAmount}</span></p>
                <button className="bg-green-700 rounded-lg lg:text-lg text-md mt-4 px-28
                 py-3 font-bold text-white hover:bg-green-600" onClick={btnhandler}>Checkout Now</button>
              </div>
            </div>
          </div>) : (
            <div className="flex flex-col justify-center h-[80vh] w-[100vw] text-center">
              <h1 className="font-bold text-lg text-gray-700">Your cart is empty!</h1>
              <NavLink to="/">
                <button className="bg-green-600 px-9 py-3 rounded-lg text-white uppercase text-sm font-bold mt-5">
                  Shop Now
                </button>
              </NavLink>
            </div>
          )
      }
    </div>
  );
};
export default Cart;