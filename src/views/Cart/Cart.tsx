import { useDispatch } from "react-redux";
import {
  addProductToCart,
  removeProductFromCart,
} from "store/features/productSlice";

// Define types for your Redux state
interface Product {
  id: string;
  name: string;
  quantity: number;
  price: number;
}

interface ProductState {
  cart: Product[];
  singleProduct: Product[];
}

const Cart = () => {
  const dispatch = useDispatch();
  const getCartProducts = localStorage.getItem("cart");
  const parsedPrdoucts = JSON.parse(getCartProducts!);

  return (
    <div className="flex flex-wrap mt-24 min-h-[80vh]">
      {parsedPrdoucts.map((product: any) => (
        <div
          key={product.id}
          className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 p-4"
        >
          <div className="border rounded-lg overflow-hidden shadow-md">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="font-semibold text-lg mb-2 line-clamp-1">
                {product.title}
              </h3>
              <p className="text-gray-600 mb-2">Quantity: {product.quantity}</p>
              <p className="text-gray-600 mb-2">Category: {product.category}</p>
              <p className="text-gray-600 mb-2">Price: {product.price}</p>

              <div className="flex items-center">
                <button
                  onClick={() => {
                    dispatch(removeProductFromCart(product.id));
                  }}
                  // disabled={quantity <= 1}
                  className="px-4 py-2 bg-white text-gray-700 rounded-l-md border border-gray-250 hover:bg-gray-300 focus:outline-none focus:ring focus:ring-gray-400"
                >
                  -
                </button>
                <span className="px-4 py-2 bg-white text-gray-700">
                  {/* {quantity} */}
                </span>
                <button
                  onClick={() => {
                    dispatch(addProductToCart(product));
                  }}
                  className="px-4 py-2 bg-white text-gray-700 rounded-r-md border border-gray-250 hover:bg-gray-300 focus:outline-none focus:ring focus:ring-gray-400"
                >
                  +
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cart;
