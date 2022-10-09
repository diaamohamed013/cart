import { Route, Routes } from "react-router-dom";
import Basket from "./Components/Basket/Basket";
import Home from "./Components/Home/Home";
import NavBar from "./Components/NavBar/NavBar";
import NotFound from "./Components/NotFound/NotFound";
import axios from "axios";
import { useState, useEffect } from "react";

function App() {

  let [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  async function getProducts() {
    setLoading(true);
    let { data } = await axios.get(`https://fakestoreapi.com/products`);
    setProducts(data);
    setLoading(false);
  }
  useEffect(() => {
    getProducts()
  }, [])

  function addToCart(product) {
    const itemExist = cartItems.find((p) => p.id === product.id);
    if (itemExist) {
      const newItems = cartItems.map((p) =>
        p.id === product.id ? { ...itemExist, quantity: itemExist.quantity + 1 } : p
      );
      setCartItems(newItems);
      localStorage.setItem("cartItems", JSON.stringify(newItems));
    }
    else {
      const newItems = [...cartItems, { ...product, quantity: 1 }];
      setCartItems(newItems);
      localStorage.setItem("cartItems", JSON.stringify(newItems));
    }
  }

  function removeFromCart(product) {
    const itemExist = cartItems.find((p) => p.id === product.id);
    if (itemExist.quantity === 1) {
      const newItems = cartItems.filter((p) => p.id !== product.id);
      setCartItems(newItems);
      localStorage.setItem("cartItems", JSON.stringify(newItems));
    }
    else {
      const newItems = cartItems.map((p) =>
        p.id === product.id ? { ...itemExist, quantity: itemExist.quantity - 1 } : p
      );
      setCartItems(newItems);
      localStorage.setItem("cartItems", JSON.stringify(newItems));
    }
  }

  function removeItem(product) {
    const itemExist = cartItems.find((p) => p.id === product.id);
    if (itemExist) {
      const newItems = cartItems.filter((p) => p.id !== product.id);
      setCartItems(newItems);
      localStorage.setItem("cartItems", JSON.stringify(newItems));
    }
  }

  useEffect(() => {
    setCartItems(localStorage.getItem("cartItems") ? JSON.parse(localStorage.getItem("cartItems")) : []);

  }, [])


  return (
    <>
      {
        loading === false ?
          <>
            <NavBar cartItems={cartItems.length} products={products} />
            <div className="container py-5">
              <Routes>

                <Route path="/" element={<Home cartItems={cartItems}
                  products={products} addToCart={addToCart}
                  removeFromCart={removeFromCart} removeItem={removeItem} />}>
                </Route>

                <Route path="home" element={<Home cartItems={cartItems} products={products}
                  addToCart={addToCart} removeFromCart={removeFromCart} removeItem={removeItem} />}>
                </Route>

                <Route path="basket" element={<Basket
                  cartItems={cartItems} addToCart={addToCart} removeFromCart={removeFromCart}
                  removeItem={removeItem}
                />}></Route>

                <Route path="*" element={<NotFound />}></Route>

              </Routes>

            </div>
          </>
          :
          <div className="position-absolute top-50 start-50 translate-middle text-center">
            <i className="fas fa-circle-notch fa-spin fa-2xl"></i>
          </div>
      }


    </>
  );
}

export default App;
