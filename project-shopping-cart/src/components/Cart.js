import { useEffect, useState } from "react";

//Cart component
export function Cart({ cart }) {
  useEffect(() => {
    console.log(cart);
  }, [cart]);

  return (
    <>
      <div className="arena">asa</div>
    </>
  );
}
