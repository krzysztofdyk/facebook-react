import React, { Component } from "react";
import ReactTable from "react-table";

class Table extends Component {
  render() {
    const data = [
      {
        msg: "Hello",
        num: 1,
      },
      {
        msg: "Hey",
        num: 2,
      },
      {
        msg: "Hi",
        num: 3,
      },
      {
        msg: "Bye",
        num: 4,
      },
      {
        msg: "Welcome",
        num: 5,
      },
      {
        msg: "Thanks",
        num: 6,
      },
    ];
    const columns = [
      {
        Header: "Message",
        accessor: "msg",
      },
      {
        Header: "Number",
        accessor: "num",
      },
    ];
    return (
      <div>
        <ReactTable data={data} columns={columns} defaultPageSize={2} pageSizeOptions={[2, 4, 6]} />
      </div>
    );
  }
}
export default Table;
