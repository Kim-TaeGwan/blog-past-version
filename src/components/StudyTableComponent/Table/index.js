import React, { useState, useEffect } from "react";
import moment from "moment";
import PartTitle from "components/common/PartTitle";
import TableItem from "./TableItem.js";
import { studyApi } from "shared/Api";
import { Link } from "react-router-dom";

const TableComponent = ({ main }) => {
  const [list, setList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

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
            list.map((item, i) => (
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
    </div>
  );
};

export default TableComponent;
