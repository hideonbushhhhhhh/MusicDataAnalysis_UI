import { Chart, Legend, Axis, Tooltip, Coord, Point, registerShape } from 'viser-react';
import * as React from 'react';
import { Input } from 'antd';

const { Search } = Input;
const DataSet = require('@antv/data-set');

const scale = [
    { dataKey: 'x', nice: false },
    { dataKey: 'y', nice: false },
];

registerShape('point', 'cloud', {
    draw(cfg, container) {
        return container.addShape('text', {
            attrs: {
                fillOpacity: cfg.opacity,
                fontSize: cfg.origin._origin.size,
                rotate: cfg.origin._origin.rotate,
                text: cfg.origin._origin.text,
                textAlign: 'center',
                fontFamily: cfg.origin._origin.font,
                fill: cfg.color,
                textBaseline: 'Alphabetic',
                ...cfg.style,
                x: cfg.x,
                y: cfg.y,
            },
        });
    }
});

export default class App extends React.Component {
    state = {
        lyric:'',
        data: [],
    };
    componentDidMount() {
            var data=[{
                x:"lalalla",
                value:100,
                 },
                {
                    x:"bbb",
                    value:101,
                }]
            const dv = new DataSet.View().source(data);
            const range = dv.range('value');
            const min = range[0];
            const max = range[1];
            dv.transform({
                type: 'tag-cloud',
                fields: ['x', 'value'],
                size: [640, 400],
                font: 'Verdana',
                padding: 0,
                timeInterval: 5000, // max execute time
                rotate() {
                    let random = ~~(Math.random() * 4) % 4;
                    if (random == 2) {
                        random = 0;
                    }
                    return random * 90; // 0, 90, 270
                },
                fontSize(d) {
                    if (d.value) {
                        return ((d.value - min) / (max - min)) * (80 - 24) + 24;
                    }
                    return 0;
                }
            });
            this.setState({ data: dv.rows });

    }

    render() {
        const { data } = this.state;

        return (
            <div>
                <Search placeholder="input search text" onSearch={value => console.log(value)} enterButton />
                <Chart width={640} height={400} data={data} scale={scale} padding={[0]}>
                    <Tooltip showTitle={false}></Tooltip>
                    <Coord type="rect" direction="TL"></Coord>
                    <Point position="x*y" color="category" shape="cloud" tooltip="value*category"></Point>
                </Chart>
            </div>
        );
    }
}


