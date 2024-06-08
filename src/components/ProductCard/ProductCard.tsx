import ProductModal from "@components/ProductModal/ProductModal";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, fetchProducts } from "@store/features/productSlice";
import { ReactComponent as ProductBag} from "@assets/SvgIcons/ProductBag.svg";
import { baseUrl } from "@src/constant/constant";
const ProductCard = () => {
  
  const apiUrl = `${baseUrl}/get-products`
  const [isOpen, setIsOpen] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [productId, setProductId] = useState<number | string>(0);
    const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProducts(apiUrl) as any);
  }, [dispatch, apiUrl]);

  const closeModal = () => {
    setShowModal(false);
  };

  const openModal = (id: number | string) => {
    setShowModal(true);
    console.log(typeof id)
    setProductId(id);
  };

  const addToCartFun = (_id: any) => {
    dispatch(addToCart(_id) as any);
  };
  const productData = useSelector((state: any) => state.product.products);
    const firstFourProducts = productData && productData.slice(0, 8);

  return (
    <>
      {firstFourProducts?.map((i: any) => {
        return (
          <div key={i} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 my-4 p-10">
            <div className="bg-white rounded-xl overflow-hidden">
              <div className="relative">
                <img
                  className="h-80 w-full object-contain transition duration-300 ease-in-out transform hover:scale-105"
                  src={i.product_image}
                  alt="Item"
                />
                <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center opacity-0 transition-opacity duration-300 ease-in-out hover:opacity-100">
                  <span
                    onClick={() => {
                      addToCartFun (i._id);
                    }}
                  >
                    <ProductBag />
                  </span>
                </div>
              </div>
              <div className="p-8 text-center">
                <div className="uppercase tracking-wide text-sm text-black font-semibold truncate">
                  {i.name}
                </div>
                <div className="mt-4">
                  <p className="text-gray-600">Price: AED {i.discount_price}</p>
                </div>
                <button
                  onClick={() => {
                    openModal(i._id);
                  }}
                  className="mt-4 w-full bg-white border border-black rounded-full px-4 py-2 transition-colors duration-300 ease-in-out hover:bg-black hover:text-white"
                >
                  Shop Now
                </button>
              </div>
            </div>
          </div>
        );
      })}

      <ProductModal
        showModal={showModal}
        onClose={closeModal}
        productId={productId.toString()}
      />
    </>
  );
};

export default ProductCard;
