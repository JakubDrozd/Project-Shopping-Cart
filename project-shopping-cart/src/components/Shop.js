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
    <>
      <div>
        {/* Header*/}
        <header className="py-5 arena">
          <div className="container px-4 px-lg-5 my-5 ">
            <div className="text-center text-white ">
              <h1 className="display-4 fw-bolder">Today's store</h1>
              <p className="lead fw-normal text-white-100 mb-0">
                Updates at 1 AM CET
              </p>
            </div>
          </div>
        </header>
        {/* Section*/}
        <section className="d-flex arena">
          <div className="container px-4 px-lg-5 mt-5">
            <div className="d-flex justify-center flex-wrap gap-3">
              {items
                .sort((a, b) => b.store.cost - a.store.cost)
                .map((item) => {
                  if (item.store.cost === 0) {
                    // eslint-disable-next-line array-callback-return
                    return;
                  }
                  return (
                    <div className="col mb-5" key={item.itemId}>
                      <div className={`card h-100`}>
                        {/* Product image*/}
                        <Link to={`/${item.itemId}`}>
                          <div className="bg-image hover-zoom">
                            <img
                              className="card-img-top bg-info"
                              src={item.item.images.background}
                              alt="#"
                            />
                          </div>
                        </Link>
                        {/* Product price*/}
                        <Link to={`/${item.itemId}`}>
                          <h5 className="price">
                            {item.store.cost.toLocaleString("en-US")}{" "}
                            <img
                              src={require("../images/coins.png")}
                              width={"10%"}
                              alt={item.item.name}
                            ></img>
                          </h5>
                        </Link>
                        {/* Product details*/}
                        <div className="card-body p-4">
                          <div className="text-center">
                            {/* Product name*/}
                            <h5 className="fw-bolder">{item.item.name}</h5>
                          </div>
                        </div>
                        {/* Product actions*/}
                        {/* <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                            <div className="text-center">
                              <Link to={`/${item.itemId}`}>
                                <div className="btn btn-outline-dark mt-auto btn-lg">
                                  Show in shop
                                </div>
                              </Link>
                            </div>
                          </div> */}
                        <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
                          <div className="text-center">
                            <div
                              className="btn btn-outline-dark mt-auto btn-lg"
                              onClick={() => {
                                handleClick(item);
                              }}
                            >
                              Add to cart
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
            </div>
          </div>
        </section>
        {/* Footer*/}
        <footer className="py-5 nav">
          <div className="container">
            <p className="m-0 text-center text-white">
              Copyright © Veanty 2022
            </p>
          </div>
        </footer>
      </div>
    </>
  );
}
