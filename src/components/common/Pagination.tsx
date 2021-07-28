import React, { FC } from 'react';

const Pagination: FC = () => {
  return (
    <div className="page_list">
      <div className="arrow">&lt;&lt;</div>
      <div className={`page insert`}>1</div>
      <div className="arrow">&gt;&gt;</div>
    </div>
  );
};

export default Pagination;
