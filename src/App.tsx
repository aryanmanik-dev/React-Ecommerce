import {
  Header,
  Footer,
  Home,
  ProductCollection,
  ProductCart,
  AccountLogin,
  AccountRegister,
  ViewProduct,
  Dashboard,
  
} from '@config/constant';
import { Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
function App() {
  return (
    <div className="min-h-[100vh]">
      <Suspense>
        <BrowserRouter>
          {/* <Header /> */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/collections" element={<ProductCollection />} />
            <Route
              path="/product/view-product/:productId"
              element={<ViewProduct />}
            />
            <Route path="/cart" element={<ProductCart />} />
            <Route path="/account/login" element={<AccountLogin />} />
            <Route path="/account/register" element={<AccountRegister />} />

            {/* admin */}

            <Route path="/dashboard/home" element={<Dashboard />} />


          </Routes>
          <Footer />
        </BrowserRouter>
      </Suspense>
    </div>
  );
}

export default App;
