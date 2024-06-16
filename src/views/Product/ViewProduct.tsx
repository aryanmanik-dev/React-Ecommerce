import { Header } from '@config/constant';
import { fetchSingleProduct } from '@store/features/productSlice';
import axios from 'axios';
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
          dispatch(fetchSingleProduct(productId) as any);
        } catch (error) {
          console.error('Error fetching product:', error);
        }
      }
    };
    fetchData();
  }, [dispatch, productId]);

  const loadScript = (src: any) => {
    return new Promise((resolve) => {
      const script = document.createElement('script');
      script.src = src;
      script.onload = () => {
        resolve(true);
      };
      script.onerror = () => {
        resolve(false);
      };
      document.body.appendChild(script);
    });
  };

  const displayRazorpay = async () => {
    const res = await loadScript(
      'https://checkout.razorpay.com/v1/checkout.js'
    );

    if (!res) {
      alert('Razorpay SDK failed to load. Are you online?');
      return;
    }

    const result = await axios.post('http://localhost:4000/create-order', {
      amount: 500,
    });

    if (!result) {
      alert('Server error. Are you online?');
      return;
    }

    const { amount, id: order_id, currency } = result.data;

    const options = {
      key: 'rzp_test_bKdmEvzmhIJ3NG', // Enter the Key ID generated from the Dashboard
      amount: amount.toString(),
      currency: currency,
      name: 'Zilli',
      description: 'Test Transaction',
      order_id: order_id,
      handler: async function (response: any) {
        alert(
          `Payment successful. Payment ID: ${response.razorpay_payment_id}`
        );
      },
      prefill: {
        name: 'Aryan Manik',
        email: 'aryanmanikdeveloper@example.com',
        contact: '8476908346',
      },
      theme: {
        color: '#F37254',
      },
    };
    const paymentObject = new (window as any).Razorpay(options);
    paymentObject.open();
  };

  return (
    <div className=" m-20">
      <Header />

      <div className="flex flex-col lg:flex-row justify-around">
        <div className="w-full lg:w-1/2 flex flex-col lg:flex-row">
          <div className="w-full lg:w-1/2">
            <img
              className="object-cover w-full h-full"
              src={singleProduct?.product_image}
            />
          </div>
          <div className="w-full lg:w-1/2">
            <img
              className="object-cover w-full h-full"
              src={singleProduct?.product_image}
            />
          </div>
        </div>
        <div className="bg-white w-full lg:w-1/2 p-6">
          <h1 className="text-black text-3xl mb-4">
            {singleProduct?.product_title}
          </h1>
          <p className="text-black mb-4">{singleProduct?.product_title}</p>
          <p className="text-black mb-4">
            <strong>Price:</strong> {singleProduct?.discount_price}
          </p>

          <div className="mb-4">
            <h2 className="text-black text-xl mb-2">Colors:</h2>
            <div className="flex space-x-2">
              <div className="w-6 h-6 bg-blue-500 rounded-full"></div>
              <div className="w-6 h-6 bg-green-500 rounded-full"></div>
              <div className="w-6 h-6 bg-yellow-500 rounded-full"></div>
              <div className="w-6 h-6 bg-black rounded-full"></div>
            </div>
          </div>

          <div className="mb-4">
            <h2 className="text-black text-xl mb-2">Sizes:</h2>
            <div className="flex space-x-2">
              <span className="bg-black text-white px-2 py-1 rounded">S</span>
              <span className="bg-black text-white px-2 py-1 rounded">M</span>
              <span className="bg-black text-white px-2 py-1 rounded">L</span>
              <span className="bg-black text-white px-2 py-1 rounded">XL</span>
            </div>
          </div>

          <div className="mb-4">
            <h2 className="text-black text-xl mb-2">Delivery:</h2>
            <p className="text-black">
              Free shipping on orders over $50. Standard delivery in 5-7
              business days.
            </p>
          </div>

          <button
            onClick={displayRazorpay}
            className="bg-black text-white px-4 py-2 rounded"
          >
            Purchase
          </button>
        </div>
      </div>
    </div>
  );
};

export default ViewProduct;
