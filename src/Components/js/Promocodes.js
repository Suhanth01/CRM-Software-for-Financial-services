import React, { useState } from 'react';
import DataTable from "react-data-table-component";
import DataTableExtensions from "react-data-table-component-extensions";
import "react-data-table-component-extensions/dist/index.css";
import { columns, data } from "./dataPromodatatables";

const Promocodes = () => {
  const tableData = {
    columns,
    data
  };
  const [promo, setpromo] = useState(0);
  return (
    <div className='promocodes'>
      {
        (promo===0)?
        <>
        <button className='promobtn' onClick={()=>{setpromo(1)}}>Add New</button>
        <div className="promocont">
        <div className="datatablepromo">
          <h2 className='promohead'>All promocodes</h2>
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
       </div>
       </>
        :
        <>
        <div className='promocontes'>
          <div className="promoinputs">
            <div className="inputcont1">
              <p className='promoheades'>Offer Name*</p>
              <input type="text" placeholder='Offer Name' className='inputfields inputfield1'/>
            </div>
            <div className="inputcont1">
              <p className='promoheades'>Offer code*</p>
              <input type="text" placeholder='Offer code' className='inputfields inputfield1'/>
            </div>
            <div className="inputcont1">
              <p className='promoheades'>Type*</p>
              <div className='typecont inputfields'>
              <div className='selectcontes'>
                 <p className='promoheades selectheads'>Offer type</p>
                 <select className='selectheads'>
                    <option value="">Select</option>
                    <option value="fixed">Fixed</option>
                    <option value="percentage">Percentage</option>
                 </select>
              </div>
              <div className='selectcontes'>
                 <p className='promoheades selectheads'>Promocode Usage type</p>
                 <select className='selectheads selectheads2'>
                    <option value="">Select</option>
                    <option value="one time only">One time only</option>
                    <option value="multiple time">Multiple Time</option>
                 </select>
              </div>
              </div>
            </div>
            <div className="inputcont1">
              <p className='promoheades'>Date*</p>
              <div className='typecont inputfields'>
              <div className='selectcontes'>
                 <p className='promoheades selectheads'>Startdate</p>
                 <input type="date"  className='inputfields inputfield1'/>
              </div>
              <div className='selectcontes'>
                 <p className='promoheades selectheads'>End date</p>
                 <input type="date"  className='inputfields inputfield1'/>
              </div>
              </div>
            </div>
            <div className="inputcont1">
              <p className='promoheades'>Amount*</p>
              <input type="text" placeholder='Amount' className='inputfields inputfield1'/>
            </div>
            <div className="inputcont1">
              <p className='promoheades'>Min. Order Amount*</p>
              <input type="text" placeholder='Min. Order Amount' className='inputfields inputfield1'/>
            </div>
            <div className="inputcont1">
              <p className='promoheades'>Description*</p>
              <textarea  id="" cols="30" rows="5" className='inputfields inputfield1' placeholder='description'></textarea>
            </div>
             <div className="promobtnss">
              <button className='pbtnsd save'>Save</button>
              <button className='pbtnsd cancel' onClick={()=>{setpromo(0)}}>Cancel</button>
             </div>
          </div>
        </div>

        </>
      }
      
     </div>
  )
}

export default Promocodes