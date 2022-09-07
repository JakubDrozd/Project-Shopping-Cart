import Dropdown from "react-bootstrap/dropdown";
import { Link } from "react-router-dom";

//Dropdown component
export function CartDropdown({ cart }) {
  return (
    <Dropdown>
      <Dropdown.Toggle>
        <h1 className="display-4">
          <li style={{ listStyle: "none" }}>
            <div className="button-wrapper">
              <div className="button-inner material-symbols-outlined cart d-flex align-items-center">
                shopping_cart {cart.length}
              </div>
            </div>
          </li>
        </h1>
      </Dropdown.Toggle>

      <Dropdown.Menu>
        {cart.map((item) => {
          return (
            <div key={item.itemId} className="selected-item">
              <Link
                to={`/${item.itemId}`}
                style={{ textDecoration: "none", color: "black" }}
              >
                <img
                  src={item.item.images.icon}
                  alt={item.item.name}
                  className="mw-100 mh-100"
                ></img>
                <div>
                  <h5 className="display-5">{item.item.name}</h5>
                </div>
              </Link>
            </div>
          );
        })}

        <Dropdown.Divider></Dropdown.Divider>
        <Dropdown.ItemText className="text-decoration-none">
          <h3>
            {cart.reduce((total, item) => {
              return total + item.store.cost;
            }, 0)}{" "}
            <img
              src={require("../images/coins.png")}
              width={"30%"}
              alt="coins"
            ></img>
          </h3>
        </Dropdown.ItemText>
        <Link to="/cart" style={{ textDecoration: "none", color: "black" }}>
          <Dropdown.ItemText>
            <h5 className="navbar-item">Go to checkout</h5>
          </Dropdown.ItemText>
        </Link>
      </Dropdown.Menu>
    </Dropdown>
  );
}
