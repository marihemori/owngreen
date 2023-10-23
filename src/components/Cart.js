import React, { useContext } from "react";
// Icons
import { IoClose } from "react-icons/io5";
import { CartContext } from "../context/CartContext";
import CardItem from "../components/CartItem";
// stripe
import { loadStripe } from "@stripe/stripe-js";
import { request } from "../request";

const Cart = () => {
  const { setIsOpen, cart, itemsAmount, total, clearCart } =
    useContext(CartContext);

  const stripePromise = loadStripe(
    "pk_test_51O4TqeABRqXmxx7RHIKJb7fcouj0fZ2iu2LtOL7yHI8rdvuwLJPMrrz1xBmUnEE0gvkTBWuJcrbfg0YPHIfbkMr400KIuDw420"
  );

  const handlePayment = async () => {
    try {
      const stripe = await stripePromise;
      const res = await request.post("/orders", {
        cart,
      });
      await stripe.redirectToCheckout({
        sessionId: res.data.stripeSession.id,
      });
    } catch (error) {}
  };

  return (
    <div className="bg-[#F4F4F4] h-[100vh] flex flex-col">
      <div className="flex flex-row justify-between ">
        <h1 className="mb-16 text-[1.6rem] font-medium">
          Cart ({itemsAmount} items)
        </h1>
        <IoClose
          onClick={() => setIsOpen(false)}
          className="cursor-pointer text-2xl"
        />
      </div>
      <div className="flex flex-col gap-10">
        {cart.map((item) => {
          return <CardItem item={item} key={item.id} />;
        })}
      </div>
      {cart.length >= 1 && (
        <div className="flex flex-col h-[100%] place-content-end">
          <div className="flex justify-between text-[1.3rem] mb-2">
            <div>Subtotal</div>
            <div>$ {total}</div>
          </div>
          <div className="flex justify-between font-medium text-[1.4rem]">
            <div>Total</div>
            <div>${parseFloat(total)}</div>
          </div>
        </div>
      )}
      <div className="">
        {cart.length >= 1 ? (
          <div className="flex justify-between gap-x-4 my-8">
            <button onClick={clearCart} className="text-[1.3rem]">
              Clear cart
            </button>
            <button
              onClick={handlePayment}
              className="text-[1.3rem] border-[3px] px-4 py-2 rounded-[0.3rem] border-[#000000] font-medium hover:bg-[#BCD2C5] transition w-fit lg:self-end"
            >
              Checkout
            </button>
          </div>
        ) : (
          <div className="text-[1.3rem] text-center">
            <p>Your cart is empty :)</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
