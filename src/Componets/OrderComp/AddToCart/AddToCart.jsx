import { useState } from "react";
import { FaPlus, FaMinus, FaTimes } from "react-icons/fa";
import List1 from "../../../assets/HomeCompImg/DelightsImg/list1.png";
import List2 from "../../../assets/HomeCompImg/DelightsImg/List2.png";
import { GoPlus } from "react-icons/go";
import { HiMinus } from "react-icons/hi";
import { Link } from "react-router";
import PrimaryButton from "../../Layout/PrimaryButton";

const AddToCart = () => {
  const [cartItems, setCartItems] = useState([
    { id: 1, name: "Indian Coffee", price: 25.0, quantity: 1, image: List2 },
    { id: 2, name: "Coffee Machine", price: 25.0, quantity: 1, image: List1 },
  ]);

  const shippingCost = 15.0;

  const handleQuantityChange = (id, delta) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity + delta) }
          : item
      )
    );
  };

  const handleRemoveItem = (id) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const total = subtotal + shippingCost;

  return (
    <section className="py-10 md:py-24 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto flex flex-col gap-10">

        {/* Cart Table with horizontal scroll on small screens */}
        <div className="overflow-x-auto " data-aos="fade-up">
          <table className="min-w-full border-collapse">
            <thead>
              <tr className="border-b-2 text-xs sm:text-lg font-bold">
                <th className="text-left p-4">Product</th>
                <th className="p-4">Price</th>
                <th className="p-4">Quantity</th>
                <th className="p-4">Total</th>
              </tr>
            </thead>
            <tbody>
              {cartItems.map((item) => (
                <tr key={item.id} className="border-b text-xs sm:text-base">
                  <td className="flex flex-col sm:flex-row items-center text-center sm:p-4 gap-4">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="p-1 sm:p-4 h-16 sm:h-40 sm:order-1"
                    />
                    <span className="sm:order-2">{item.name}</span>
                    <button
                      onClick={() => handleRemoveItem(item.id)}
                      className="sm:p-2 rounded-full border border-gray-300 hover:bg-red-500 hover:text-white transition "
                    >
                      <FaTimes />
                    </button>
                  </td>
                  <td className="p-4 text-primary font-semibold text-center">
                    ${item.price.toFixed(2)}
                  </td>
                  <td className="p-4">
                    <div className="flex items-center justify-center sm:gap-2">
                      <button
                        onClick={() => handleQuantityChange(item.id, -1)}
                        className="p-2 hover:bg-gray-200 rounded"
                      >
                        <HiMinus />
                      </button>
                      <span className="font-semibold">{item.quantity}</span>
                      <button
                        onClick={() => handleQuantityChange(item.id, 1)}
                        className="p-2 hover:bg-gray-200 rounded"
                      >
                        <GoPlus />
                      </button>
                    </div>
                  </td>
                  <td className="p-4 text-primary font-semibold text-center">
                    ${(item.price * item.quantity).toFixed(2)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Cart Totals */}
        <div className="w-full lg:w-1/3 lg:ml-auto">
          <div
            data-aos="fade-left"
            className="bg-[#242425] text-white p-6 rounded-lg"
          >
            <h2 className="text-lg sm:text-xl font-bold mb-4 text-primary">
              Cart Totals
            </h2>
            <div className="border border-white/40 bg-[#2D2C2C] p-4 space-y-3 rounded-lg">
              <div className="flex justify-between text-sm sm:text-base">
                <span>Cart Subtotal:</span>
                <span className="font-bold">${subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-sm sm:text-base">
                <span>Shipping Total:</span>
                <span className="font-bold">${shippingCost.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-base sm:text-lg font-bold border-t border-white/40 pt-2">
                <span>Total:</span>
                <span>${total.toFixed(2)}</span>
              </div>
            </div>

            {/* Checkout Button */}
            <div className="mt-4">
              <Link to="/">
                <PrimaryButton className="text-white w-full rounded-lg">Order Now</PrimaryButton>
              </Link>
            </div>
          </div>
        </div>


      </div>
    </section>
  );
};

export default AddToCart;
