import { Chart, Tooltip, Axis, Legend, Pie, Coord } from 'viser-react';
import * as React from 'react';
const DataSet = require('@antv/data-set');

const sourceData = [
    { item: '1900年以前', count: 6 },
    { item: '1900年-1910年', count: 3 },
    { item: '1910年-1920年', count: 17 },
    { item: '1920年-1930年', count: 16 },
    { item: '1930年-1940年', count: 25 },
    { item: '1940年-1950年', count: 54 },
    { item: '1950年-1960年', count: 100 },
    { item: '1960年-1970年', count: 278 },
    { item: '1970年-1980年', count: 343 },
    { item: '1980年-1990年', count: 607 },
    { item: '1990年-2000年', count: 293 },
    { item: '2000年-2010年', count: 25 },
    { item: '2010年-至今', count: 5 }
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





