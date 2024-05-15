import ProductModal from "components/ProductModal/ProductModal";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addProductToCart, fetchProducts } from "store/features/productSlice";
import ProductBag from "assets/SvgIcons/ProductBag";
const ProductCard = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [productId, setProductId] = useState<number | string>(0);

  const productData = useSelector((state: any) => state.product.products);
  const firstFourProducts = productData.slice(0, 8);
  const dispatch = useDispatch();
  console.log(productData);

  useEffect(() => {
    dispatch(fetchProducts() as any);
  }, []);

  const closeModal = () => {
    setShowModal(false);
  };

  const openModal = (id: number | string) => {
    setShowModal(true);
    setProductId(id);
  };

  const addToCart = (id: any) => {
    dispatch(addProductToCart(id));
  };

  return (
    <>
      {firstFourProducts.map((i: any) => {
        return (
          <div key={i} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 my-4 p-10">
            <div className="bg-white rounded-xl overflow-hidden">
              <div className="relative">
                <img
                  className="h-80 w-full object-contain transition duration-300 ease-in-out transform hover:scale-105"
                  src={i.image}
                  alt="Item"
                />
                <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center opacity-0 transition-opacity duration-300 ease-in-out hover:opacity-100">
                  <span
                    onClick={() => {
                      addToCart(i);
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
                  <p className="text-gray-600">Price: AED {i.price}</p>
                </div>
                <button
                  onClick={() => {
                    openModal(i.id);
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
        productId={productId}
      />
    </>
  );
};

export default ProductCard;
