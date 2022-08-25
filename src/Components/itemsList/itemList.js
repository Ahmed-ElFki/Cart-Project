import React from "react";
import CardGroup from "react-bootstrap/CardGroup";
import Item from "../items/item";
import PropTypes from "prop-types";

function itemList() {
  let Products = [
    {
      productImg:
        "https://images.pexels.com/photos/125779/pexels-photo-125779.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      productName: "Product-1",
      productPrice: 100,
    },
    {
      productImg:
        "https://images.pexels.com/photos/125779/pexels-photo-125779.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      productName: "Product-2",
      productPrice: 200,
    },
  ];
  return (
    <CardGroup
      style={{
        width: "800px",
        margin: "50px auto",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around",
      }}
    >
      {Products.map((currentProduct) => (
        <Item
          ItemPIC={currentProduct.productImg}
          itemName={currentProduct.productName}
          itemPrice={currentProduct.productPrice}
        />
      ))}
    </CardGroup>
  );
}

export default itemList;

itemList.propTypes = {
  ItemPIC: PropTypes.object,
  itemName: PropTypes.string,
  itemPrice: PropTypes.string,
};
