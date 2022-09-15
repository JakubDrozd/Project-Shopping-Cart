import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./Home";
import { Shop } from "./Shop";
import { NotFound } from "./NotFound";
import { Nav } from "./Nav";
import { Cart } from "./Cart";
import { ItemPage } from "./ItemPage";
import { useState } from "react";

//App component
export function App() {
  const [cart, setCart] = useState([]);

  const handleClick = (item) => {
    if (cart.includes(item)) {
      return;
    } else {
      setCart((cart) => [...cart, item]);
      console.log(item);
    }
  };

  //
  // useEffect(() => {
  //   console.log(cart);
  // }, [cart]);

  return (
    <BrowserRouter>
      <Nav cart={cart} />
      <Routes>
        <Route
          path="/"
          element={<Home handleClick={handleClick}></Home>}
        ></Route>
        <Route
          path="/shop"
          element={<Shop handleClick={handleClick}></Shop>}
        ></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
        <Route path="/cart" element={<Cart cart={cart}></Cart>}></Route>
        <Route
          path=":id"
          element={<ItemPage handleClick={handleClick}></ItemPage>}
        ></Route>
      </Routes>
    </BrowserRouter>
  );
}
