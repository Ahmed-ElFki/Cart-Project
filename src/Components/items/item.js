import React from "react";
import Card from "react-bootstrap/Card";

export default function ({ ItemPIC, itemName, itemPrice }) {
  return (
    <Card>
      <Card.Img
        variant="top"
        src={ItemPIC}
        style={{
          width: "200px",
          height: "auto",
        }}
      />
      <Card.Body>
        <Card.Title>{itemName}</Card.Title>
        <Card.Text>{itemPrice}</Card.Text>
      </Card.Body>
    </Card>
  );
}
