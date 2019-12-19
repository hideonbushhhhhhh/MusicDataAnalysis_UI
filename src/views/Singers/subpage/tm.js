import { Chart, Tooltip, Axis, Bar, Coord } from 'viser-react';
import * as React from 'react';
const DataSet = require('@antv/data-set');

const sourceData = [
    { country: '李荣浩', population: 59 },
    { country: '张艾嘉', population: 46 },
    { country: '章子怡', population: 45 },
    { country: '周杰伦', population: 44 },
    { country: 'Ethan', population: 39 },
    { country: '刘德华', population: 38 },
    { country: '成龙', population: 37 },
    { country: '刘若英', population: 37 },
    { country: '周迅', population: 36 },
    { country: '赵薇', population: 35 },
    { country: '周星星', population: 34 },
    { country: '周星驰', population: 34 },
    { country: '徐克', population: 31 },
    { country: '梁朝伟', population: 30 },
    { country: '陈慧琳', population: 29 },
    { country: '蔡依林', population: 29 },
    { country: '蔡健雅', population: 26 },
    { country: '秦海璐', population: 26 }
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
