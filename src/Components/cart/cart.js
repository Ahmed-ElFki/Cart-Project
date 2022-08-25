import React from "react";

function cart({ itemName, itemUnitPrice, itemQte }) {
  return (
    <>
      <p>{itemName}</p>
      <p>{itemUnitPrice}</p>
      <p>{itemQte}</p>
    </>
  );
}

export default cart;

cart.defaultProps = {
  itemName: "Random",
  itemUnitPrice: "999",
  itemQte: "999",
};
