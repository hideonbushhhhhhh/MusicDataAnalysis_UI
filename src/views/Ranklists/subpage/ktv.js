import { Chart, Tooltip, Axis, Legend, Pie, Coord } from 'viser-react';
import * as React from 'react';
const DataSet = require('@antv/data-set');

const sourceData = [
    { item: '负面歌曲', count: 9 },
    { item: '正面歌曲', count: 11 }
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
                <Axis />
                <Legend dataKey="item" />
                <Coord type="theta" />
                <Pie
                    position="percent"
                    color="item"
                    style={{ stroke: '#fff', lineWidth: 1 }}
                    label={['percent', {
                        offset: -40,
                        textStyle: {
                            rotate: 0,
                            textAlign: 'center',
                            shadowBlur: 2,
                            shadowColor: 'rgba(0, 0, 0, .45)',
                        }
                    }]}
                />
            </Chart>
        );
    }
}