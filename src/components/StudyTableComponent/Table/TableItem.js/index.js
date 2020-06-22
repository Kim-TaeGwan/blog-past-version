import React from "react";

const TableItem = ({ title, date, number, category }) => {
  return (
    <tr>
      <td>{number}</td>
      <td>{category}</td>
      <td className="title">{title}</td>
      <td>{date}</td>
    </tr>
  );
};

export default TableItem;
