import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { baseUrl } from "@src/constant/constant";
import axios from "axios";

// Define an async thunk to fetch products from the API
export const fetchProducts = createAsyncThunk(
  "product/fetchProducts",
  async (apiUrl:string) => {
    try {
      // Make the API request to fetch products
      const response = await axios.get(apiUrl);
      // Return the products data
      console.log(response.data);
      
      return response.data.products;
    } catch (error) {
      // Handle errors
      throw error;
    }
  }
);
//fetch single products

export const fetchSingleProduct = createAsyncThunk(
  "product/fetchSingleProduct",
  async (id: number | string) => {
    try {

      const response = await axios.get(`${baseUrl}/getproductbyId/${id}`);
      console.log(response);
      // Return the products data
      return response.data.
      products;
    } catch (error) {
      // Handle errors
      throw error;
    }
  }
);


export const addToCart = createAsyncThunk(
  "product/addToCart",
  async (_id: any) => {
    try {
      const response = await axios.post(
        `http://localhost:4000/add-to-cart/${_id}/1`
      );
      console.log(response);
      return response.data;
    } catch (error) {
      throw error;
    }
  }
);

export const deleteSingleProduct = createAsyncThunk(
  "product/deleteSingleProduct",
  async (id: number | string) => {
    try {
      const response = await axios.delete(
        `https://fakestoreapi.com/products/${id}`
      );
      console.log(response);
      return response.data;
    } catch (error) {
      throw error;
    }
  }
);

export const fetchCartProducts = createAsyncThunk(
  "product/fetchCartProducts",
  async () => {
    try {
      const response = await axios.get(
        `http://localhost:4000/get-cart-products`
      );
      console.log(response.data.cartItems);
      return response.data.cartItems || [];
    } catch (error) {
      throw error;
    }
  }
);

// Define the initial state
const initialState = {
  products: [],
  cart: [] as any,
  singleProduct: [],
  totalQuantity: 0,
  status: "idle",
  error: "",
};

// Create a slice
const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    // addProductToCart: (state, action: any) => {
    //   const product = action.payload;
    //   const existingProductIndex = state.cart.findIndex(
    //     (item: { id: any }) => item.id === product.id
    //   );
    
    //   if (existingProductIndex !== -1) {
    //     // Product already exists in the cart, increment quantity
    //     state.cart[existingProductIndex].quantity += 1;
    //   } else {
    //     // Product does not exist in the cart, add it
    //     state.cart.push({ ...product, quantity: 1 });
    //   }
    
    //   // Combine products with same ID and update quantity
    //   const updatedCart = state.cart.reduce((acc: any, item: any) => {
    //     const existingItemIndex = acc.findIndex((i: any) => i.id === item.id);
    //     if (existingItemIndex !== -1) {
    //       acc[existingItemIndex].quantity += item.quantity;
    //     } else {
    //       acc.push(item);
    //     }
    //     return acc;
    //   }, []);
    
    //   // Update total quantity
    //   state.totalQuantity = updatedCart.reduce(
    //     (total: any, item: any) => total + item.quantity,
    //     0
    //   );
    
    //   // Update cart in state
    //   state.cart = updatedCart;
    
    //   // Update local storage
    //   localStorage.setItem("cart", JSON.stringify(state.cart));
    //   localStorage.setItem("totalQuantity", state.totalQuantity.toString());
    // },

    removeProductFromCart: (state, action: any) => {
      const productIdToRemove = action.payload;
    
      // Find the index of the product to remove in the cart
      const productIndexToRemove = state.cart.findIndex(
        (item: { id: any }) => item.id === productIdToRemove
      );
    
      // If the product is found in the cart
      if (productIndexToRemove !== -1) {
        // Decrease the quantity of the product by 1
        state.cart[productIndexToRemove].quantity -= 1;
    
        // If the quantity becomes zero after removing, remove the product from the cart completely
        if (state.cart[productIndexToRemove].quantity === 0) {
          state.cart.splice(productIndexToRemove, 1);
        }
      }
    
      // Combine products with the same ID and update quantity
      const updatedCart = state.cart.reduce((acc: any, item: any) => {
        const existingItemIndex = acc.findIndex((i: any) => i.id === item.id);
        if (existingItemIndex !== -1) {
          acc[existingItemIndex].quantity += item.quantity;
        } else {
          acc.push(item);
        }
        return acc;
      }, []);
    
      // Update total quantity
      state.totalQuantity = updatedCart.reduce(
        (total: any, item: any) => total + item.quantity,
        0
      );
    
      // Update cart in state
      state.cart = updatedCart;
    
      // Update local storage
      localStorage.setItem("cart", JSON.stringify(state.cart));
      localStorage.setItem("totalQuantity", state.totalQuantity.toString());
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.products = action.payload;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.status = "failed";
        // state.error = action.error.message;
      })

      .addCase(fetchSingleProduct.pending, (state) => {
        state.status = "loading";
      })

      .addCase(fetchSingleProduct.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.singleProduct = action.payload;
      })

      .addCase(fetchSingleProduct.rejected, (state) => {
        state.status = "failed";
      })


      .addCase(fetchCartProducts.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchCartProducts.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.totalQuantity = action.payload;
        // state.totalQuantity = action.payload.reduce((total:number, item:any) => total + item.quantity, 0);
      })
      .addCase(fetchCartProducts.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message || "Something went wrong";
      });


  },
});

// Export actions and reducer
export const { removeProductFromCart } = productSlice.actions;
export default productSlice.reducer;
