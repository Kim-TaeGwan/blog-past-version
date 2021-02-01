import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import moment from "moment";
import PartTitle from "components/common/PartTitle";
import TableItem from "./TableItem.js";
import { studyApi } from "shared/Api";
import Pagination from "components/common/Pagination";

const TableComponent = ({ main }) => {
  const [list, setList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  // const [postsPerPage, setPostsPerPage] = useState(10);

  useEffect(() => {
    async function fetchStudyList() {
      setIsLoading(true);
      try {
        const result = await studyApi.get("/");
        setList(result.data);
      } catch (error) {
        console.log(error);
      }
      setIsLoading(false);
    }
    fetchStudyList();
  }, []);

  // pagination
  let postsPerPage = 10;
  const indexOfLast = currentPage * postsPerPage;
  const indexOfFist = indexOfLast - postsPerPage;
  function currentPosts(tmp) {
    let currentPosts = 0;
    currentPosts = tmp.slice(indexOfFist, indexOfLast);
    return currentPosts;
  }

  return (
    <div className="table_container">
      <PartTitle>StudyTable</PartTitle>
      {main && (
        <div className="all_btn">
          <Link to="/studyTable">전체보기</Link>
        </div>
      )}
      {isLoading && <div className="loader" />}
      <table className={main ? "main" : ""}>
        <tbody>
          {list &&
            currentPosts(list).map((item, i) => (
              <TableItem
                key={i}
                title={item.title}
                date={moment(item.dete).format("YY.MM.DD HH:mm")}
                category={item.category}
                url={item.url}
              />
            ))}
        </tbody>
      </table>
      {main ? (
        ""
      ) : (
        <Pagination
          postsPerpage={postsPerPage}
          totalPosts={list.length}
          paginate={setCurrentPage}
        />
      )}
    </div>
  );
};

export default TableComponent;
