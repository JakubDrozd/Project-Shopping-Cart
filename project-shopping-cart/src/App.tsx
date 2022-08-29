import {BrowserRouter, Routes, Route} from "react-router-dom"
import { Home } from "./Home"
import { Shop } from "./Shop"


export function App(){
    return (
        <BrowserRouter>
            <Routes>
                    <Route index element={<Home></Home>}></Route>
                    <Route path="/shop" element={<Shop></Shop>}></Route>
            </Routes>
        </BrowserRouter>
    )
}