import React from "react";

const TableComponent = () => {
  return (
    <div className="table_container">
      <table>
        <thead>
          <tr>
            <th>No</th>
            <th>제 목</th>
            <th>날 짜</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>01</td>
            <td>
              testtesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttest
            </td>
            <td>20.02.28</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default TableComponent;
