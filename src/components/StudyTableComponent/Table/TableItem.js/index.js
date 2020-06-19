import React from "react";

const TableItem = ({ title, date, number, url }) => {
  const notionUrl = () => {
    let openNewWindow = window.open("about:blank");
    openNewWindow.location.href = `${url}`;

  }
  return (
    <tr onClick={notionUrl} className={`as`}>
      <td>{number}</td>
      <td className="title">{title}</td>
      <td>{date}</td>
    </tr>
  );
};

export default TableItem;
