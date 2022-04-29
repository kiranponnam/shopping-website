import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import ProductList from "./components/ProductListing/ProductList";
import Cart from "./components/Cart/cart";
import NavBar from "./components/Nav/navbar";
import { ProductListProvider } from "./components/Context/productContext";
import {ScrollBottomToTop} from "./components/ScrollTop/scrollBottomtoTop"
import { Footer } from "./components/footer/Footer";
import { OrderPlaced } from "./components/OrderPlaced/OrderPlaced";
import { ProductDescription } from "./components/Product/ProductDescription";
import Login from "./components/Login/Login";

function App() {
  return (
    <div className="App">
      <ProductListProvider>
        <NavBar />
        <Routes>
          <Route path="/" element={<ProductList />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/products/:id" element={<ProductDescription/>}/>
          <Route path="/orderplaced" element={<OrderPlaced />} />
          <Route path="/login" element={<Login/>}/>
        </Routes>
        <Footer/>
        <ScrollBottomToTop showBelow={250}/>
      </ProductListProvider>
    </div>
  );
}

export default App;
