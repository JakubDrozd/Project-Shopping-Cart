import {BrowserRouter, Routes, Route} from "react-router-dom"
import { Home } from "./Home"
import { Shop } from "./Shop"
import { NotFound } from "./NotFound"
import {Nav} from "./Nav"


export function App(){
    return (
        <BrowserRouter>
        <Nav />
          <Routes>
            <Route path="/" element={<Home></Home>}></Route>
            <Route path="/shop" element={<Shop></Shop>}></Route>
            <Route path="*" element={<NotFound></NotFound>}></Route>
          </Routes>
        </BrowserRouter>
    )
}