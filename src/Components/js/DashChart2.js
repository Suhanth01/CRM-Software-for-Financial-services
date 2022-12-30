import React from 'react';
import { BarChart, Bar, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';
  
const DashChart2 = () => {
    const data = [
        {month: 'September', orders: 10},
        {month: 'October', orders: 3}
      ];
    return (
    <div className='barcharts'>
        <div className="chartheadcont">
          <p className="charthead">
            Orders Review
          </p>
          <select className='chartselect'>
            <option value="">2022</option>
            <option value="">2021</option>
            <option value="">2020</option>
            <option value="">2019</option>
          </select>
        </div>
        <BarChart width={400} height={300} data={data}>
            <Bar dataKey="orders" fill="#001253" />
            <CartesianGrid stroke="#ccc" />
            <XAxis dataKey="month" />
            <YAxis dataKey="orders"/>
        </BarChart>
    </div>
  )
}

export default DashChart2