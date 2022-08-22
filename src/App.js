import styled from "styled-components";
import axios from "axios";

import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/MainElements/Navbar";
import Homepage from "../src/components/Homepage/Homepage";
import Products from "../src/components/Products/Products";
import Cart from "./components/MainElements/Cart";
import SingleProduct from "../src/components/Products/SingleProduct";
import Error from "../src/components/Error";
import { AllContext } from "./contexts/AllContext";
function App() {
  const mainUrl = "https://fakestoreapi.com/products";
  const [productUrl, setProductUrl] = useState(`${mainUrl}?limit=50`);
  const [data, setData] = useState([]);
  const [singleProductData, setSingleProduct] = useState([]);
  const [cart, setCart] = useState([]);
  // functions start
  const fetchProducts = async (url) => {
    const resp = await axios.get(url);
    setData(resp.data);
  };
  const fetchSingleProduct = async (url) => {
    const resp = await axios.get(url);
    setSingleProduct(resp.data);
  };
  const cartChecker = (id, quantity, newObject) => {
    const itemFind = cart.find((item) => item.id === id);
    if (itemFind) {
      itemFind.quantity += 1;
      setCart([
        ...cart.filter((item) => item.id !== id),
        {
          id: newObject.id,
          price: newObject.price,
          title: newObject.title,
          quantity: itemFind.quantity,
          image: newObject.image,
        },
      ]);
    }
    if (!itemFind) {
      setCart([...cart, newObject]);
    }
  };

  const addToCart = (id, price, title, quantity, image) => {
    const newObject = { id, price, title, quantity, image };
    cartChecker(id, quantity, newObject);
    console.log(cart);
  };
  const deleteFromCart = (id) => {
    setCart(cart.filter((i) => i.id !== id));
  };
  //send values to child components
  const values = {
    productUrl,
    setProductUrl,
    data,
    setData,
    fetchProducts,
    fetchSingleProduct,
    mainUrl,
    singleProductData,
    cart,
    deleteFromCart,
    addToCart,
  };
  return (
    <AllContext.Provider value={values}>
      <div className="App">
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route exact path="/" element={<Homepage />} />
            <Route path="/products" element={<Products />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/products/:id" element={<SingleProduct />} />
            <Route path="*" element={<Error />} />
          </Routes>
        </BrowserRouter>
      </div>
    </AllContext.Provider>
  );
}

export default App;
