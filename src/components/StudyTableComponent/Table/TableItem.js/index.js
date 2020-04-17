import React from "react";

const TableItem = ({ title, date, number }) => {
  return (
    <tr>
      <td>{number}</td>
      <td className="title">{title}</td>
      <td>{date}</td>
    </tr>
  );
};

export default TableItem;
