import React from "react";
import PartTitle from "../../common/PartTitle";

const TableComponent = () => {
  return (
    <div className="table_container">
      <PartTitle>StudyTable</PartTitle>
      <table>
        <tbody>
          <tr>
            <td>01</td>
            <td className="title">test1test1test1test1</td>
            <td>20.02.28</td>
          </tr>
          <tr>
            <td>01</td>
            <td className="title">test2test2test2test2test2</td>
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
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default TableComponent;
