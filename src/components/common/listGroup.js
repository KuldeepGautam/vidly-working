import React from "react";

const ListGroup = (props) => {
  const { items, textProperty, valueProperty, selectedItem, onItemChange } =
    props;
  return (
    <ul className="list-group">
      {items.map((item) => (
        <li
          onClick={() => onItemChange(item)}
          key={item._id}
          className={
            item === selectedItem ? "list-group-item active" : "list-group-item"
          }
        >
          {item.name}
        </li>
      ))}
    </ul>
  );
};

ListGroup.defaultProps = {
  textProperty: "name",
  valueProperty: "_id",
};

export default ListGroup;
