import React from "react";
import Cart from "../cart/cart";

export default function cartList(userProductsList) {
  return (
    <>
      {userProductsList.map((product) => (
        <Cart
          itemName={product.productName}
          itemUnitPrice={product.productPrice}
          itemQte={"1"}
        />
      ))}
    </>
  );
}
