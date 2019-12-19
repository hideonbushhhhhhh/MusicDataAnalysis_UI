import { Chart, Tooltip, Axis, Legend, Pie, Coord } from 'viser-react';
import * as React from 'react';
const DataSet = require('@antv/data-set');

const sourceData = [{ item: '华语男歌手', count: 2428 },
    { item: '华语女歌手', count: 2265 },
    { item: '华语组合/乐队', count: 2279 },
{ item: '欧美男歌手', count: 2700 },
{ item: '欧美女歌手', count: 2621 },
{ item: '欧美组合/乐队', count: 2700 },
{ item: '日本男歌手', count: 2417 },
{ item: '日本女歌手', count: 2257 },
{ item: '日本组合/乐队', count: 2643 },
{ item: '韩国男歌手', count: 2636 },
{ item: '韩国女歌手', count: 2103 },
{ item:'韩国组合/乐队', count: 2505 },
{ item: '其他男歌手', count: 2355 },
{ item: '其他女歌手', count: 1519 },
{ item: '其他组合/乐队', count: 1774 },
{ item: '入驻歌手', count: 240 },]
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





