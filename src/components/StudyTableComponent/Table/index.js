import React from "react";
import PartTitle from "../../common/PartTitle";

const TableComponent = () => {
  return (
    <div className="table_container">
      <PartTitle>StudyTable</PartTitle>
      <table>
        {/* <thead>
          <tr>
            <th>No</th>
            <th>제 목</th>
            <th>날 짜</th>
          </tr>
        </thead> */}
        <tbody>
          <tr>
            <td>01</td>
            <td>test1test1test1test1test1test1test1test1test1</td>
            <td>20.02.28</td>
          </tr>
          <tr>
            <td>01</td>
            <td>
              test2test2test2test2test2test2test2test2test2test2test2test2test2test2test2test2test2
            </td>
            <td>20.02.28</td>
          </tr>
          <tr>
            <td>01</td>
            <td>
              test3test3test3test3test3test3test3test3test3test3test3test3test3test3test3test3test3
            </td>
            <td>20.02.28</td>
          </tr>
          <tr>
            <td>01</td>
            <td>
              test4test4test4test4test4test4test4test4test4test4test4test4test4test4test4test4test4test4
            </td>
            <td>20.02.28</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default TableComponent;
