import React, { useState, useEffect } from "react";
import PartTitle from "components/common/PartTitle";
import TableItem from "./TableItem.js";
import { studyApi } from "shared/Api";

const TableComponent = () => {
  const [list, setList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function fetchStudyList() {
      setIsLoading(true);
      try {
        const result = await studyApi.get("/");
        setList(result.data);
        console.log(result);
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
      <table>
        <tbody>
          {isLoading && <div>로더</div>}
          {list &&
            list.map((item, i) => (
              <TableItem title={item.title} date={item.date} number={i + 1} category={item.category} url={item.url} />
            ))}
          {/* <tr>
            <td>01</td>
            <td className="title">test2test2test2test2</td>
            <td>20.02.28</td>
          </tr>
          <tr>
            <td>01</td>
            <td className="title">test3test3</td>
            <td>20.02.28</td>
          </tr>
          <tr>
            <td>01</td>
            <td className="title">test4test4</td>
            <td>20.02.28</td>
          </tr>
          <tr>
            <td>01</td>
            <td className="title">test5test5</td>
            <td>20.02.28</td>
          </tr> */}
        </tbody>
      </table>
    </div>
  );
};

export default TableComponent;
