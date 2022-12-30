import React from 'react';
import DataTable from "react-data-table-component";
import DataTableExtensions from "react-data-table-component-extensions";
import "react-data-table-component-extensions/dist/index.css";
import { columns, data } from "./dataBookingdatatable";

const DatatableBookings = () => {
  const tableData = {
    columns,
    data
  };
  return (
    <div>
        <h2>Bookings</h2>
        <DataTableExtensions {...tableData}>
        <DataTable
          columns={columns}
          data={data}
          noHeader
          defaultSortField="id"
          defaultSortAsc={false}
          pagination
          highlightOnHover
        />
      </DataTableExtensions>
    </div>
  )
}

export default DatatableBookings