import React from 'react';
import { PieChart, Pie,Tooltip,Cell} from 'recharts';

const Dashchart3 = () => {
  const datas = [
    {name: "September", value: 4, color: '#57c0e8'},
    {name: "October", value: 8, color: "#FF6565"},
  ];  
  const COLORS = [ '#001253', '#D8D9CF'];
  return (
    <div className='dashchart33'>
       <div className="chartheadcont dash33">
          <p className="charthead">
            Users
          </p>
          <select className='chartselect'>
            <option value="">2022</option>
            <option value="">2021</option>
            <option value="">2020</option>
            <option value="">2019</option>
          </select>
        </div>
       <PieChart width={400} height={300} className="pieschart">
          <Pie 
          data={datas} 
          dataKey="value" 
          nameKey="name" 
          cx="50%" 
          cy="50%" 
          innerRadius={60} 
          outerRadius={90} 
          fill='#ff8b8b'
          label={({
            cx,
            cy,
            midAngle,
            innerRadius,
            outerRadius,
            value,
            index
          }) => {
            const RADIAN = Math.PI / 180;
            const radius = 25 + innerRadius + (outerRadius - innerRadius);
            const x = cx + radius * Math.cos(-midAngle * RADIAN);
            const y = cy + radius * Math.sin(-midAngle * RADIAN);
            return (
              <text
                x={x}
                y={y}
                fill="#000"
                textAnchor={x > cx ? "start" : "end"}
                dominantBaseline="central"
              >
                {datas[index].name} ({value})
              </text>
            );
          }}
          >
            {
          	  datas.map((entry, index) => <Cell fill={COLORS[index % COLORS.length]}/>)
            } 
          </Pie>
          <Tooltip />
        </PieChart>
    </div>
  )
}

export default Dashchart3