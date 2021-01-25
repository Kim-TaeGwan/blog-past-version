import React from "react";

const Pagination = ({ postsPerpage, totalPosts, paginate }) => {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalPosts / postsPerpage); i++) {
    pageNumbers.push(i);
  }
  return (
    <div className="page_list">
      <div className="arrow">&lt;&lt;</div>
      {pageNumbers.map(number => (
        <div
          key={number}
          className="page insert"
          onClick={() => paginate(number)}
        >
          {number}
        </div>
      ))}
      <div className="arrow">&gt;&gt;</div>
    </div>
  );
};

export default Pagination;
