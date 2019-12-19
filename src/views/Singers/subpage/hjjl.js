
import { Chart, Tooltip, Axis, Bar, Coord } from 'viser-react';
import * as React from 'react';
const DataSet = require('@antv/data-set');

const sourceData = [
    { country: '周杰伦', population: 377 },
    { country: '林俊杰', population: 365 },
    { country: '陈奕迅', population: 300 },
    { country: '周笔畅', population: 265 },
    { country: '孙燕姿', population: 258 },
    { country: '谢霆锋', population: 244 },
    { country: '黎明', population: 242 },
    { country: '杨千嬅', population: 241 },
    { country: '王菲', population: 235 },
    { country: '李克勤', population: 207 },
    { country: '郑秀文', population: 206 },
    { country: '蔡依林', population: 193 },
    { country: '李宇春', population: 192 },
    { country: '罗志祥', population: 189 },
    { country: '陈慧琳', population: 182 },
    { country: '刘德华', population: 180 },
    { country: '林峯', population: 178 },
    { country: '郭富城', population: 168 },
    { country: '梁咏琪', population: 167 },
    { country: '胡彦斌', population: 164 },
    { country: '张国荣', population: 156 },
    { country: '赵薇', population: 153 },
    { country: '光良', population: 150 },
];

const dv = new DataSet.View().source(sourceData);
dv.transform({
    type: 'sort',
    callback(a, b) {
        return a.population - b.population > 0;
    },
});
const data = dv.rows;

export default class App extends React.Component {
    render() {
        return (
            <Chart forceFit height={400} data={data}>
                <Coord type="rect" direction="LB" />
                <Tooltip />
                <Axis dataKey="country" label={{ offset: 12 }} />
                <Bar position="country*population" />
            </Chart>
        );
    }
}
