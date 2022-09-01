import {Link} from "react-router-dom"
import { CartDropdown } from "./Dropdown"
// import {Button} from "bootstrap//BUtton"

export function Nav(){
    return (
        <nav className="nav">
            <Link to="/"><li>Home</li></Link>
            <Link to="/shop"><li>Shop</li></Link>
        <CartDropdown></CartDropdown>
        </nav>
    )
}