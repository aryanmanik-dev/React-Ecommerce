const ProductCard = () => {
  const products = ["1", "1", "1", "1", "1", "1", "1", "1"];

  return (
    <>
      {products.map((i) => {
        return (
          <div key={i} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 my-4 p-10">
            <div className="bg-white rounded-xl overflow-hidden">
              <div className="relative">
                <img
                  className="h-auto w-full object-cover transition duration-300 ease-in-out transform hover:scale-105"
                  src="https://www.zillidubai.com/cdn/shop/files/3610351976977_BLUE_6.jpg?v=1709193237&width=823"
                  alt="Item"
                />
                <img
                  className="h-auto w-full object-cover absolute top-0 left-0 opacity-0 transition duration-300 ease-in-out transform hover:scale-105"
                  src="https://www.zillidubai.com/cdn/shop/files/3610352101002_WHITE_2.jpg?v=1709194614&width=533"
                  alt="Item"
                />
              </div>
              <div className="p-8 text-center">
                <div className="uppercase tracking-wide text-sm text-black font-semibold">
                  Product Name
                </div>
                <div className="mt-4">
                  <p className="text-gray-600">Price: $10.00</p>
                </div>
                <button className="mt-4 bg-white border border-black rounded-full px-4 py-2 transition-colors duration-300 ease-in-out hover:bg-black hover:text-white">
                  Shop Now
                </button>
              </div>
            </div>
          </div>
        );
      })}

    </>
  );
};

export default ProductCard;
