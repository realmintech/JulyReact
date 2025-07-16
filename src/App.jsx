import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import Products from "./pages/Products";
import ProductDetail from "./pages/ProductDetail";
// import Button from './components/Button'
// import Card from './components/Card'
// import Login from './components/Login'

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />} />
          <Route path="/productDetail/:id" element={<ProductDetail />} />
        </Routes>
        {/* <Footer /> */}
      </BrowserRouter>
      {/* <Button />
     <Card />
     <Login /> */}
    </>
  );
}

export default App;
