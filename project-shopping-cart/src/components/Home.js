import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

//Home component
export function Home() {
  const [items, setItems] = useState([]);

  const fetchItems = async () => {
    const data = await fetch(
      "https://fortnite-api.theapinetwork.com/items/popular"
    );
    const items = await data.json();
    setItems(items.entries[1].entries);
    console.log(items.entries[1].entries);
  };

  useEffect(() => {
    fetchItems();
  }, []);

  return (
    <div>
      {/* Header*/}
      <header className="bg-dark py-5">
        <div className="container px-4 px-lg-5 my-5">
          <div className="text-center text-white">
            <h1 className="display-4 fw-bolder">This week's favorites</h1>
            <p className="lead fw-normal text-white-50 mb-0">
              By community's ratings
            </p>
          </div>
        </div>
      </header>
      {/* Section*/}
      <section className="py-5 bg-light">
        <div className="container px-4 px-lg-5 mt-5">
          <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
            {items
              .sort((a, b) => b.rating - a.rating)
              .map((item) => {
                if (item.name === "Randomize") {
                  return;
                }
                return (
                  <div className="col mb-5">
                    <div className="card h-100">
                      {/* Product image*/}
                      <img
                        className="card-img-top"
                        src={item.images.transparent}
                        alt={item.name}
                      />
                      {/* Product details*/}
                      <div className="card-body p-4">
                        <div className="text-center">
                          {/* Product name*/}
                          <h5 className="fw-bolder">{item.name}</h5>
                          {/* Product price*/}
                        </div>
                      </div>
                      {/* Product actions*/}
                      <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                        <div className="text-center">
                          <Link to={`/${item.identifier}`}>
                            <a
                              className="btn btn-outline-dark mt-auto"
                              href="#"
                            >
                              Show in shop
                            </a>
                          </Link>
                        </div>
                      </div>
                      <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
                        <div class="text-center">
                          <a class="btn btn-outline-dark mt-auto" href="#">
                            Add to cart
                          </a>
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
      <footer className="py-5 bg-dark">
        <div className="container">
          <p className="m-0 text-center text-white">
            Copyright © Your Website 2022
          </p>
        </div>
      </footer>
    </div>
  );
}
