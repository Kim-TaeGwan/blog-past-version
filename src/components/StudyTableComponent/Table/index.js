import React, { useState, useEffect } from "react";
import moment from "moment";
import PartTitle from "components/common/PartTitle";
import TableItem from "./TableItem.js";
import { studyApi } from "shared/Api";

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
