import { Header, Footer, Home } from "config/constant";
import { Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className="min-h-[100vh]">
      <Suspense>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </Suspense>
    </div>
  );
}

export default App;
