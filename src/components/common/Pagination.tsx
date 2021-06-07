import React, { FC } from 'react';

interface Props {
  postsPerpage: any;
  totalPosts: any;
  paginate: (e: any) => void;
}
const Pagination: FC<Props> = ({ postsPerpage, totalPosts, paginate }) => {
  // const [insert, setInsert] = useState(false);
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalPosts / postsPerpage); i++) {
    pageNumbers.push(i);
  }
  // const handlePage = number => {
  //   setInsert(!insert);
  //   paginate(number);
  // };
  return (
    <div className="page_list">
      <div className="arrow">&lt;&lt;</div>
      {pageNumbers.map((number) => (
        <div key={number} className={`page insert`} onClick={() => paginate(number)}>
          {number}
        </div>
      ))}
      <div className="arrow">&gt;&gt;</div>
    </div>
  );
};

export default Pagination;
