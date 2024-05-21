import { useDispatch, useSelector } from "react-redux";
import { deleteSingleProduct } from "@store/features/productSlice";
import { ReactComponent as Xmark } from "@assets/SvgIcons/XMark.svg";
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
  const alladdpro = useSelector((state: any) => state.product.cart);
  console.log(alladdpro);
  const getCartProducts = localStorage.getItem("cart");
  const parsedPrdoucts = JSON.parse(getCartProducts!);
  function removeNonNumeric(str: string) {
    return parseFloat(str.replace(/[^\d.]/g, ""));
  }

  const totalPrice = alladdpro.reduce(
    (acc: number, product: any) =>
      acc +
      removeNonNumeric(product.discount_price) * parseInt(product.quantity),
    0
  );
  const totalQuantity = alladdpro.reduce(
    (acc: number, product: any) => acc + product.quantity,
    0
  );

  const quantity_totalQuantity = totalPrice * totalQuantity;
  const handleDelete = (id: number) => {
    try {
      dispatch(deleteSingleProduct(id) as any);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="mt-20">
      <div className="relative overflow-x-auto min-h-52 scroll-auto">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Item
              </th>
              <th scope="col" className="px-6 py-3">
                Product name
              </th>
              <th scope="col" className="px-6 py-3">
                Quantity
              </th>
              <th scope="col" className="px-6 py-3">
                Image
              </th>
              <th scope="col" className="px-6 py-3">
                Category
              </th>
              <th scope="col" className="px-6 py-3">
                Price
              </th>
              <th scope="col" className="px-6 py-3">
                Remove
              </th>
            </tr>
          </thead>
          <tbody>
            {alladdpro.map((product: any, index: number) => (
              <tr className="bg-white text-black ">
                <td className="px-6 py-4"> {index + 1}</td>
                <td className="px-6 py-4"> {product.product_title}</td>
                <td className="px-6 py-4"> {product.quantity}</td>
                <td className="px-6 py-4">
                  <img
                    src={product.product_image}
                    alt={product.product_image}
                    className="w-20 h-20 "
                  />
                </td>
                <td className="px-6 py-4 capitalize">{product.category}</td>
                <td className="px-6 py-4">
                  {/* {parseInt(product.discount_price) * parseInt(product.quantity)} */}
                  {product.discount_price} X {product.quantity}
                </td>
                <td className="px-6 py-4">
                  <span
                    onClick={() => {
                      handleDelete(product.id);
                    }}
                  >
                    <Xmark />
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
          <thead className=" text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 h-15">
            <tr>
              <th scope="col" className="px-6 py-3"></th>
              <th scope="col" className="px-6 py-3"></th>
              <th scope="col" className="px-6 py-3">
                {totalQuantity}
              </th>
              <th scope="col" className="px-6 py-3"></th>
              <th scope="col" className="px-6 py-3"></th>
              <th scope="col" className="px-6 py-3">
                $ {totalPrice}
              </th>
              <th scope="col" className="px-6 py-3"></th>
            </tr>
          </thead>
        </table>
      </div>
    </div>
  );
};

export default Cart;
