import React from "react";

const ItemDetail = ({itemDetail}) => (
  <figure >
    <ul>
      <li>
        {itemDetail.name}
      </li>
      <li>
        Price: {itemDetail.price}
      </li>
      <li>
        happiness: {itemDetail.happiness}
      </li>
    </ul>
  </figure>
);

export default ItemDetail;
