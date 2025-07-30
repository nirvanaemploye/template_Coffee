import { useState } from "react";
import { FaPlus, FaMinus, FaTimes } from "react-icons/fa";
import List1 from "../../../assets/HomeCompImg/DelightsImg/list1.png";
import List2 from "../../../assets/HomeCompImg/DelightsImg/List2.png";

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
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto flex flex-col gap-10">
        
        {/* Cart Table with horizontal scroll on small screens */}
        <div className="overflow-x-auto" data-aos="fade-up">
          <table className="min-w-full border-collapse">
            <thead>
              <tr className="border-b-2 text-sm sm:text-lg font-bold">
                <th className="text-left p-4">Product</th>
                <th className="p-4">Price</th>
                <th className="p-4">Quantity</th>
                <th className="p-4">Total</th>
              </tr>
            </thead>
            <tbody>
              {cartItems.map((item) => (
                <tr key={item.id} className="border-b text-sm sm:text-base">
                  <td className="flex flex-col sm:flex-row items-center gap-2 p-4">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="h-20 w-20 sm:h-28 sm:w-28 object-cover"
                    />
                    <span className="text-center sm:text-left">{item.name}</span>
                    <button
                      onClick={() => handleRemoveItem(item.id)}
                      className="p-2 rounded-full border border-gray-200 shadow hover:bg-red-500 hover:text-white transition sm:ml-2"
                    >
                      <FaTimes />
                    </button>
                  </td>
                  <td className="p-4 text-primary font-semibold text-center">
                    ${item.price.toFixed(2)}
                  </td>
                  <td className="p-4">
                    <div className="flex items-center justify-center gap-2">
                      <button
                        onClick={() => handleQuantityChange(item.id, -1)}
                        className="p-2 hover:bg-gray-200 rounded"
                      >
                        <FaMinus />
                      </button>
                      <span>{item.quantity}</span>
                      <button
                        onClick={() => handleQuantityChange(item.id, 1)}
                        className="p-2 hover:bg-gray-200 rounded"
                      >
                        <FaPlus />
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
          <div data-aos="fade-left" className="bg-[#242425] text-white p-6 rounded-lg">
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
          </div>
        </div>

      </div>
    </section>
  );
};

export default AddToCart;
