import { Chart, Tooltip, Axis, Legend, Pie, Coord } from 'viser-react';
import * as React from 'react';
const DataSet = require('@antv/data-set');

const sourceData = [
    { item: '1份职业', count: 1622 },
    { item: '2份职业', count: 535 },
    { item: '3份职业', count: 205 },
    { item: '4份职业', count: 50 },
    { item: '5份职业', count: 13 },
    { item: '6份职业', count: 3 },
    { item: '7份职业', count: 5 },
    { item: '8份职业', count: 1 }
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





