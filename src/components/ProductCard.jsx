import { useCart } from '../context/CartContext';
import { useNavigate } from 'react-router-dom';

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();
  const navigate = useNavigate();

  const handleAddToCart = () => {
    addToCart(product);
    navigate('/order'); // Redirect to order page
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-4">
      <img 
        src={product.image} 
        alt={product.name} 
        className="w-full h-48 object-cover rounded-lg mb-4"
      />
      <h3 className="font-semibold text-lg mb-2">{product.name}</h3>
      <p className="text-gray-600 mb-4">${product.price}</p>
      <button
        onClick={handleAddToCart}
        className="w-full bg-primary text-white py-2 rounded hover:bg-primary/90 transition-colors"
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard; 