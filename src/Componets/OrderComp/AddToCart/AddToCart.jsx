import { useState } from "react";
import { FaPlus, FaMinus, FaTimes } from "react-icons/fa";
import List1 from "../../../assets/HomeCompImg/DelightsImg/list1.png";
import List2 from "../../../assets/HomeCompImg/DelightsImg/List2.png";

const AddToCart = () => {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "INDIAN COFFEE",
      price: 25.0,
      quantity: 1,
      image: List2, // Replace with actual image path
    },
    {
      id: 2,
      name: "COFFEE MACHINE",
      price: 25.0,
      quantity: 1,
      image: List1, // Replace with actual image path
    },
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
    <section className="py-28">
      {" "}
      <div className="container mx-auto sm:p-6">
        <div className="flex flex-col gap-10">
          {/* Cart Table */}
          <div data-aos="fade-up" className="w-full">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b-2 sm:text-2xl font-bold">
                  <th className="text-left p-4 font-semibold">Product</th>
                  <th className="p-4 font-semibold">Price</th>
                  <th className="p-4 font-semibold">Quantity</th>
                  <th className="p-4 font-semibold">Total</th>
                </tr>
              </thead>
              <tbody>
                {cartItems.map((item) => (
                  <tr key={item.id} className="border-b sm:text-xl">
                    <td className="flex flex-col sm:flex-row items-center text-center sm:p-4 gap-4">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="p-5 sm:h-40 sm:order-1"
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
                    <td className="sm:p-4">
                      <div className="flex items-center justify-center  text-center rounded-lg">
                        <button
                          onClick={() => handleQuantityChange(item.id, -1)}
                          className="sm:px-3 sm:py-2 hover:bg-gray-200"
                        >
                          <FaMinus />
                        </button>
                        <span className="px-4">{item.quantity}</span>
                        <button
                          onClick={() => handleQuantityChange(item.id, 1)}
                          className="sm:px-3 sm:py-2 hover:bg-gray-200"
                        >
                          <FaPlus />
                        </button>
                      </div>
                    </td>
                    <td className="sm:p-4 text-primary font-semibold text-center">
                      ${(item.price * item.quantity).toFixed(2)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Cart Totals Section */}
          <div className="w-full lg:w-1/3 ms-auto">
            <div data-aos="fade-left" className="bg-black text-white p-6">
              <h2 className="text-xl font-bold mb-4 text-primary">
                Cart Totals
              </h2>
              <div className="border border-gray-500 p-4 space-y-2">
                <div className="flex justify-between">
                  <span>Cart Subtotal:</span>
                  <span className="font-bold">${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span>Shipping Total:</span>
                  <span className="font-bold">${shippingCost.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-lg font-bold border-t border-gray-500 pt-2">
                  <span>Total:</span>
                  <span>${total.toFixed(2)}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AddToCart;
