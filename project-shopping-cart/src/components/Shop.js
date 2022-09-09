import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AutohideExample } from "./Toast";

export function Shop({ handleClick }) {
  const [isLoading, setIsLoading] = useState(true);
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetchItems();
  }, []);

  const fetchItems = async () => {
    const data = await fetch(
      "https://fortnite-api.theapinetwork.com/store/get"
    );
    const items = await data.json();
    setItems(items.data);
    setIsLoading(false);
    // console.log(items.data);
  };

  if (isLoading) {
    return (
      <div className="d-flex justify-content-center align-items-center">
        <h1>Loading...</h1>
      </div>
    );
  }
  return (
    <div>
      {/* Header*/}
      <header className="py-5 arena">
        <div className="container px-4 px-lg-5 my-5">
          <div className="text-center text-white">
            <h1 className="display-4 fw-bolder">Current Fortnite BR Store</h1>
            <p className="lead fw-normal text-white-50 mb-0">
              <i>Resets everyday at 1 AM CET</i>
            </p>
          </div>
        </div>
      </header>
      {/* Section*/}
      <section className="py-5 arena">
        <div className="container px-4 px-lg-5 mt-5">
          <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
            {items
              .sort((a, b) => b.store.cost - a.store.cost)
              .map((item) => {
                if (item.store.cost === 0) {
                  return null;
                } else {
                  return (
                    <div className="col mb-5" key={item.itemId}>
                      <div className="card h-100">
                        {/* Product image*/}
                        <Link to={`/${item.itemId}`}>
                          <img
                            className="card-img-top bg-info"
                            src={item.item.images.background}
                            alt={item.item.name}
                          />
                        </Link>
                        {/* Product details*/}
                        <div className="card-body p-0">
                          <div className="text-center">
                            {/* Product price*/}
                            <span className="d-flex justify-content-center align-items-center text-white pt-1 price">
                              {item.store.cost.toLocaleString("en-US")}{" "}
                              <img
                                src={require("../images/coins.png")}
                                alt="coins"
                                width={"10%"}
                              ></img>{" "}
                            </span>
                            {/* Product name*/}
                            <h5 className="fw-bolder display-5">
                              {item.item.name}
                            </h5>
                          </div>
                        </div>
                        {/* Product actions*/}
                        <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                          <h1 className="display-4">
                            <div className="button-wrapper w-100">
                              <div
                                className="button-inner"
                                onClick={() => {
                                  handleClick(item);
                                }}
                              >
                                Add to cart
                              </div>
                            </div>
                          </h1>
                        </div>
                      </div>
                    </div>
                  );
                }
              })}
          </div>
        </div>
      </section>
      {/* Footer*/}
      <footer className="store-nav d-flex justify-content-around align-items-center p-3">
        <h3 className="m-0 text-center text-white display-5">
          Copyright © Veanty 2022
        </h3>
      </footer>
    </div>
  );
}
