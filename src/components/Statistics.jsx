import React, { PureComponent } from 'react';
import {
  ComposedChart,
  Line,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,

  Scatter,
  ResponsiveContainer,
} from 'recharts';

const data = [
  {
    name: 'Assignment- 1',
    mark: 57,
  },
  {
    name: 'Assignment- 2',
    mark: 58,
  },
  {
    name: 'Assignment- 3',
    mark: 60,
  },
  {
    name: 'Assignment- 4',
    mark: 57,
  },
  {
    name: 'Assignment- 5',
    mark: 60,
  },
  {
    name: 'Assignment- 6',
    mark: 50,
  },
  {
    name: 'Assignment- 7',
    mark: 57,
  },
  {
    name: 'Assignment- 8',
    mark: 50,
  },
 
  
];

const Statistics = () => {
  
  return (
   <>
   <h1 className='text-center font-bold mt-4 '>Assignment Mark Analysis</h1>
    <ResponsiveContainer  width="100%" aspect={3}>
      
      <ComposedChart
        width={500}
        height={400}
        data={data}
        margin={{
          top: 20,
          right: 20,
          bottom: 20,
          left: 20,
        }}
      >
        <CartesianGrid stroke="#f5f5f5" />
        <XAxis dataKey="name" />
        <YAxis dataKey="mark"/>
        <Tooltip />
  
        <Area type="monotone" dataKey="mark" fill="#8884d8" stroke="#8884d8" />
        <Line type="monotone"  stroke="#ff7300" />
        <Scatter fill="red" />
      </ComposedChart>
    </ResponsiveContainer>
   </>
  );
};

export default Statistics;