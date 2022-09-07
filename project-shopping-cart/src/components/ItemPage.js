import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

//App
export function ItemPage() {
  const params = useParams();

  useEffect(() => {
    fetchItem();
    console.log(params);
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
                alt="..."
              />
            </div>
            <div className="col-md-6">
              <div className="small mb-1">ID: {item.costmeticId}</div>
              <h1 className="display-5 fw-bolder">{item.name}</h1>
              <div className="fs-5 mb-5 d-flex align-items-center">
                <span>
                  {item.obtained}{" "}
                  <img
                    src={require("../images/coins.png")}
                    width="10%"
                    height="10%"
                    alt="coin"
                  ></img>
                </span>
              </div>
              <p className="lead">{item.description}</p>
              <div className="d-flex">
                <button
                  className="btn btn-outline-white flex-shrink-0 text-white"
                  type="button"
                >
                  <i className="bi-cart-fill me-1" />
                  Add to cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <footer className="store-nav d-flex justify-content-around align-items-center p-3">
        <p className="m-0 text-center text-white">Copyright © Veanty 2022</p>
      </footer>{" "}
    </div>
  );
}
