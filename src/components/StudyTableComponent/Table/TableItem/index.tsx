import React, { FC, memo } from 'react';

interface Props {
  title: string;
  date: string;
  url: string;
  category: string;
}
const TableItem: FC<Props> = memo(({ title, date, url, category }) => {
  const notionUrl = () => {
    // let openNewWindow = window.open('about:blank');
    // openNewWindow.location.href = `${url}`;
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
