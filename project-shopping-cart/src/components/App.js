import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./Home";
import { Shop } from "./Shop";
import { NotFound } from "./NotFound";
import { Nav } from "./Nav";
import { Cart } from "./Cart";
import { ItemPage } from "./ItemPage";
import { useState, useEffect } from "react";

//App component
export function App() {
  const [cart, setCart] = useState([]);

  const handleClick = (item) => {
    setCart((cart) => [...cart, item]);
  };

  useEffect(() => {
    console.log(cart);
  }, [cart]);

  return (
    <BrowserRouter>
      <Nav cart={cart} />
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route
          path="/shop"
          element={<Shop handleClick={handleClick}></Shop>}
        ></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
        <Route path="/cart" element={<Cart></Cart>}></Route>
        <Route path=":id" element={<ItemPage></ItemPage>}></Route>
      </Routes>
    </BrowserRouter>
  );
}
