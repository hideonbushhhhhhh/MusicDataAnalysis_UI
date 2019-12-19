import { Chart, Tooltip, Legend, Sector, Coord } from 'viser-react';
import * as React from 'react';

const data = [
    { year: '张学友', population: 2292 },
    { year: '周杰伦', population: 2463 },
    { year: '陈奕迅', population: 2881 },
    { year: '林俊杰', population: 2695 },
    { year: '张国荣', population: 1971 },
    { year: '刘德华', population: 2162 },
    { year: '薛之谦', population: 2443 },
    { year: '李荣浩', population: 2335 },
    { year: '张杰', population: 2706 },
    { year: '许嵩', population: 1777 }
];

export default class App extends React.Component {
    render() {
        return (
            <Chart forceFit height={400} data={data}>
                <Tooltip />
                <Coord type="polar" innerRadius={0.2} />
                <Legend position="right" dataKey="year" offsetX={-400} />
                <Sector position="year*population" color="year" style={{ stroke: '#fff', lineWidth: 1 }} />
            </Chart>
        );
    }
}