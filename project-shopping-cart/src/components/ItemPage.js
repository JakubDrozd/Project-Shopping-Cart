import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
//
// App
export function ItemPage({ handleClick }) {
  const params = useParams();

  useEffect(() => {
    fetchItem();
  }, []);

  const [item, setItem] = useState({
    images: {},
    ratings: {},
  });

  const fetchItem = async () => {
    const fetchItem = await fetch(
      `https://fortnite-api.theapinetwork.com/item/get?id=${params.id}`
    );
    const item = await fetchItem.json();
    setItem(item.data.item);
  };

  return (
    <div className="cart-page">
      <section className="py-5 arena text-white">
        <div className="container px-4 px-lg-5 my-5">
          <div className="row gx-4 gx-lg-5 align-items-center">
            <div className="col-md-6">
              <img
                className="card-img-top mb-5 mb-md-0"
                src={item.images.background}
                alt={item.name}
              />
            </div>
            <div className="col-md-6">
              <h5 className="mb-1 text-muted">ID: {item.costmeticId}</h5>
              <h1 className="display-5 fw-bolder">{item.name}</h1>
              <div className="fs-5 mb-5 d-flex align-items-center">
                <h1>
                  {item.obtained}{" "}
                  <img
                    src={require("../images/coins.png")}
                    width="10%"
                    height="10%"
                    alt="coin"
                  ></img>
                </h1>
              </div>
              <h3 className="lead display-5">
                <i>"{item.description}"</i>
              </h3>
              <div className="d-flex">
                <h1 className="display-4">
                  <div className="button-wrapper">
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
        </div>
      </section>
      <footer className="store-nav d-flex justify-content-around align-items-center p-3">
        <h3 className="m-0 text-center text-white display-5">
          Copyright © Veanty 2022
        </h3>
      </footer>
    </div>
  );
}
