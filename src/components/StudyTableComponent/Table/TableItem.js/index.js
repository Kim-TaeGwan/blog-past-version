import React, { memo } from "react";

const TableItem = memo(({ title, date, number, url, category }) => {
  const notionUrl = () => {
    let openNewWindow = window.open("about:blank");
    openNewWindow.location.href = `${url}`;
  };
  return (
    <tr onClick={notionUrl} className={`as`}>
      <td className="category">{category}</td>
      <td className="title">{title}</td>
      <td>{date}</td>
    </tr>
  );
});

export default TableItem;
