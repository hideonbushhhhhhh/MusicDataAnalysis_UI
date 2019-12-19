import { Chart, Tooltip, Axis, Legend, Pie, Coord } from 'viser-react';
import * as React from 'react';
const DataSet = require('@antv/data-set');

const sourceData = [
    { item: '北京电影学院', count: 21 },
    { item: '上海戏剧学院', count: 15 },
    { item: '中央戏剧学院', count: 13 },
    { item: '北京大学', count: 11 },
    { item: '中国音乐学院', count: 9 },
    { item: '星海音乐学院', count: 8 },
    { item: '中央音乐学院', count: 8 },
    { item: '解放军艺术学院', count: 7 },
    { item: '四川师范大学', count: 7 },
    { item: '四川音乐学院', count: 7 },
    { item: '清华大学', count: 6 },
    { item: '北京现代音乐学院', count: 5 },
    { item: '湖南师范大学', count: 5 },
    { item: '南京艺术学院', count: 5 },
    { item: '上海音乐学院', count: 5 },
    { item: '沈阳音乐学院', count: 5 },
    { item: '武汉音乐学院', count: 5 },
    { item: '香港大学', count: 5 },
    { item: '中国文化大学', count: 5 },
    { item: '中国戏曲学校', count: 5 },
    { item: '中央民族大学', count: 5 },
    { item: '伯克利音乐学院', count: 4 },
    { item: '上海师范大学', count: 4 },
    { item: '首都师范大学', count: 4 },
    { item: '台湾大学', count: 4 },
    { item: '香港理工大学', count: 4 }
];

const scale = [{
    dataKey: 'percent',
    min: 0,
    formatter: '.0%',
}];

const dv = new DataSet.View().source(sourceData);
dv.transform({
    type: 'percent',
    field: 'count',
    dimension: 'item',
    as: 'percent'
});
const data = dv.rows;

export default class App extends React.Component {
    render() {
        return (
            <Chart forceFit height={400} data={data} scale={scale}>
                <Tooltip showTitle={false} />
                <Coord type="theta" />
                <Axis />
                <Legend dataKey="item" />
                <Pie
                    position="percent"
                    color="item"
                    style={{ stroke: '#fff', lineWidth: 1 }}
                    label={['percent', {
                        formatter: (val, item) => {
                            return item.point.item + ': ' + val;
                        }
                    }]}
                />
            </Chart>
        );
    }
}





