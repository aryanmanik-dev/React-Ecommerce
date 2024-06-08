import { fetchSingleProduct } from '@store/features/productSlice';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

const ViewProduct = () => {
  const { productId } = useParams();
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
          console.error('Error fetching product:', error);
        }
      }
    };
    fetchData();
  }, [dispatch, productId]);
  return (
    <div className="min-h-screen m-10">
      <div className="flex justify-around">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mt-20">
          <div className="bg-red-600 min-h-[80vh]">
            <img
              src="https://oldnavy.gap.com/webcontent/0055/303/765/cn55303765.jpg"
              className="object-contain"
              alt="Image"
            />
          </div>
          <div className="bg-red-600 min-h-[80vh]">
            <img
              src="https://oldnavy.gap.com/webcontent/0055/303/806/cn55303806.jpg"
              className="object-contain"
              alt="Image"
            />
          </div>
          <div className="bg-red-600 min-h-[80vh]">
            <img
              src="https://oldnavy.gap.com/webcontent/0055/303/806/cn55303806.jpg"
              className="object-contain"
              alt="Image"
            />
          </div>
          <div className="bg-red-600 min-h-[80vh]">
            <img
              src="https://oldnavy.gap.com/webcontent/0055/303/806/cn55303806.jpg"
              className="object-contain"
              alt="Image"
            />
          </div>
          <div className="bg-red-600 min-h-[80vh]">
            <img
              src="https://oldnavy.gap.com/webcontent/0055/303/806/cn55303806.jpg"
              className="object-contain"
              alt="Image"
            />
          </div>
        </div>

        <div className="bg-red-600 min-h-[80vh]">
          <img
            src="https://oldnavy.gap.com/webcontent/0055/303/806/cn55303806.jpg"
            className="object-contain"
            alt="Image"
          />
        </div>
        <div className="bg-red-600 min-h-[80vh] p-10">
          <div className="flex flex-col gap-5">
            <span>
              Extra High-Waisted Taylor Trouser Shorts -- 5-inch inseam
            </span>

            <div className="flex justify-between">
              <span>1</span>
              <span>1</span>
            </div>

            <div className="flex gap-5">
              <span>1</span>
              <span>1</span>
              <span>1</span>
              <span>1</span>
              <span>1</span>
            </div>

            <div className="text-center">
              <h2>size guide</h2>
              <div className="flex justify-around">
                <span>1</span>
                <span>1</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewProduct;
