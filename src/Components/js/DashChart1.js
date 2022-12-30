import React from 'react'
import {
    LineChart,
    ResponsiveContainer,
    Tooltip,
    Line,
    XAxis,
    YAxis,
    CartesianGrid
} from 'recharts';
  
const pdata = [
    {
        month: 'September',
        Earnings: 1250
    },
    {
        month: 'October',
        Earnings: 200
    },
];
const DashChart1 = () => {
  return (
    <div className='charts'>
       <div className="chartheadcont">
          <p className="charthead">
            Earnings
          </p>
          <select className='chartselect'>
            <option value="">2022</option>
            <option value="">2021</option>
            <option value="">2020</option>
            <option value="">2019</option>
          </select>
        </div>
        <ResponsiveContainer width="100%" aspect={3}>
            <LineChart data={pdata} margin={{ right: 50,top:10 }} className="chartearn">
                <CartesianGrid />
                <XAxis dataKey="month" 
                    interval={'preserveStartEnd'} />
                <YAxis></YAxis>
                <Tooltip />
                <Line dataKey="Earnings"
                    stroke="orange" />
            </LineChart>
        </ResponsiveContainer>
     </div>
  )
}

export default DashChart1