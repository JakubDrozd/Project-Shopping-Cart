import {Link} from "react-router-dom"

export function Nav(){
    return (
        <nav>
            <Link to="/"><li>Home</li></Link>
            <Link to="/shop"><li>Shop</li></Link>
        </nav>
    )
}