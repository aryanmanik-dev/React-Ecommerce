import CustomDropdown from "components/CustomDropdown/CustomDropdown";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "store/features/productSlice";

const Collections = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [columns, setColumns] = useState(2);
  const [text, setText] = useState("");
  const [selectedOption, setSelectedOption] = useState("");

  const headerText = "Spring Summer Collection 2024";
  const productData = useSelector((state: any) => state.product.products);
//   console.log(productData);
  let filteredProducts = productData.filter((prod: any) => prod.price >= 0);
  filteredProducts.sort((a: any, b: any) => a.price - b.price);
  console.log(filteredProducts);



  
  const dispatch = useDispatch();
  useEffect(() => {
    // dispatch(fetchProducts() as any);
    if (productData.length === 0) {
        dispatch(fetchProducts() as any);
      }
  }, []);
  useEffect(() => {
    let currentIndex = 0;
    const interval = setInterval(() => {
      if (currentIndex <= headerText.length) {
        setText(headerText.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(interval);
      }
    }, 100);

    return () => clearInterval(interval);
  }, []);

  const dropdownData = [
    {
      title: "Price : Low to High",
      value: "price_low_to_high",
    },
  ];

  const handleDropDownChange = (selected: string) => {
  };

  return (
    <section className="min-h-screen mt-20 p-10">
      <h2 className="text-4xl text-center p-20">
        {text}
        <span className="cursor">|</span>
      </h2>

      <div className="flex  justify-between items-center py-10">
        <CustomDropdown
          buttonText="Relevance"
          items={dropdownData.map((drop: any) => drop.title)}
          onSelect={handleDropDownChange}
        />
        <div className="flex gap-5 hidden md:flex">
          <span
            onClick={() => {
              setColumns(1);
            }}
            className=" h-10 w-10 bg-black text-white text-center leading-10"
          >
            1
          </span>
          <span
            onClick={() => {
              setColumns(2);
            }}
            className=" h-10 w-10 bg-black text-white text-center leading-10"
          >
            2
          </span>
          <span
            onClick={() => {
              setColumns(3);
            }}
            className=" h-10 w-10 bg-black text-white text-center leading-10"
          >
            3
          </span>
          <span
            onClick={() => {
              setColumns(4);
            }}
            className=" h-10 w-10 bg-black text-white text-center leading-10"
          >
            4
          </span>
          <span
            onClick={() => {
              setColumns(5);
            }}
            className=" h-10 w-10 bg-black text-white text-center leading-10"
          >
            5
          </span>
        </div>
      </div>

      <div
        className={`grid grid-cols-1 ${
          columns === 1
            ? "md:grid-cols-1"
            : columns === 2
            ? "md:grid-cols-2"
            : columns === 3
            ? "md:grid-cols-3"
            : columns === 4
            ? "md:grid-cols-4"
            : columns === 5
            ? "md:grid-cols-5"
            : "md:grid-cols-5"
        } gap-4 h-80vh`}
      >
        {productData?.map((product: any) => (
          <div key={product.id} className="bg-white shadow-md p-4 rounded-lg">
            <img
              className="h-80 w-full object-contain transition duration-300 ease-in-out transform hover:scale-105"
              src={product.image}
              alt="Item"
            />

            <div className="text-gray-800">
              <h2 className="text-lg font-semibold mb-2 truncate">
                {product.title}
              </h2>
              <p className="text-sm text-gray-600 mb-4 truncate">
                {product.description}
              </p>
              <button className="mt-4 w-full bg-white border border-black rounded-full px-4 py-2 transition-colors duration-300 ease-in-out hover:bg-black hover:text-white">
                Shop Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Collections;
