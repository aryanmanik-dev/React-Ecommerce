import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addProductToCart, fetchSingleProduct, removeProductFromCart } from "store/features/productSlice";

interface ModalProps {
  showModal: boolean;
  onClose: any;
  productId?: string | number;
}

const ProductModal: React.FC<ModalProps> = ({
  showModal,
  productId,
  onClose,
}) => {
    const cartQuantity = useSelector((state: any) => state.product.totalQuantity);

  const [quantity, setQuantity] = useState(1);
  const singleProduct = useSelector(
    (state: any) => state.product.singleProduct
  );

  console.log(singleProduct);
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchData = async () => {
      if (productId) {
        try {
          dispatch(fetchSingleProduct(productId!) as any);
        } catch (error) {
          console.error("Error fetching product:", error);
        }
      }
    };
    fetchData();
  }, [dispatch, productId]);

  return (
    <>
      {showModal ? (
        <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
          <div className="fixed inset-0 bg-black opacity-80"></div>
          <div className="relative  w-auto my-6 mx-auto max-w-3xl">
            <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none p-5">
              <div className="flex p-0 md:p-6 flex-col md:flex-row items-center gap-3 m-0">
                <div className="w-1/2  ">
                  <img
                    src={singleProduct?.image}
                    alt="Product"
                    className="w-auto h-[40vh] object-contain"
                  />
                </div>
                <div className="w-1/2 px-4 mt-10 md:mt-0">
                  <div className="flex justify-between items-center">
                    <div className="max-w-[70%]">
                      <h4 className="text-xl font-semibold text-transform: capitalize truncate">
                        {singleProduct?.title}
                      </h4>
                    </div>
                    <button
                      className="border-0 text-black text-3xl leading-none font-semibold"
                      onClick={onClose}
                    >
                      <span className="text-black h-6 w-6 text-2xl block">
                        ×
                      </span>
                    </button>
                  </div>

                  <h3 className="text-xl font-semibold text-transform: capitalize">
                    AED. {singleProduct?.price}
                  </h3>

                  <p className="my-4 text-blueGray-500 text-lg text-transform: capitalize leading-relaxed overflow-hidden line-clamp-2">
                    {singleProduct?.description}
                  </p>

                  <p className="underline">View Details</p>

                  <h3 className="mt-5 text-xl font-semibold text-transform: capitalize">
                    Color :
                  </h3>

                  <h4 className="mt-2 mb-2 text-xl font-semibold text-transform: capitalize">
                    Size
                  </h4>
                  <div className="flex gap-1">
                    <div className="bg-gray-800 text-white w-[40px] h-[40px] rounded-md flex justify-center items-center">
                      <span className="text-xl">1</span>
                    </div>

                    <div className="bg-gray-800  text-white w-[40px] h-[40px] rounded-md flex justify-center items-center">
                      <span className="text-xl">2</span>
                    </div>

                    <div className="bg-gray-800 text-white w-[40px] h-[40px] rounded-md flex justify-center items-center">
                      <span className="text-xl">3</span>
                    </div>

                    <div className="bg-gray-800 text-white w-[40px] h-[40px] rounded-md flex justify-center items-center">
                      <span className="text-xl">4</span>
                    </div>

                    <div className="bg-gray-800 text-white w-[40px] h-[40px] rounded-md flex justify-center items-center">
                      <span className="text-xl">5</span>
                    </div>
                  </div>

                  <div className=" mt-4">
                    <h4>Quantity</h4>
                    <div className="flex justify-between">
                      <div className="flex items-center">
                        <button
                          onClick={() => {
                            dispatch(removeProductFromCart(productId as any))
                          }}
                          disabled={quantity <= 1}
                          className="px-4 py-2 bg-white text-gray-700 rounded-l-md border border-gray-250 hover:bg-gray-300 focus:outline-none focus:ring focus:ring-gray-400"
                        >
                          -
                        </button>
                        <span className="px-4 py-2 bg-white text-gray-700">
                          {quantity}
                        </span>
                        <button
                          onClick={() => {
                            dispatch(addProductToCart(singleProduct))
                            setQuantity(quantity + 1)
                          }}
                          className="px-4 py-2 bg-white text-gray-700 rounded-r-md border border-gray-250 hover:bg-gray-300 focus:outline-none focus:ring focus:ring-gray-400"
                        >
                          +
                        </button>
                      </div>

                      <div className="w-[50%]">
                        <button className=" w-full bg-black text-white border  border-black rounded-full px-4 py-2 transition-colors duration-300 ease-in-out hover:bg-white hover:text-black">
                          Shop Now
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default ProductModal;
