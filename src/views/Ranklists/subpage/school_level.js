import * as React from 'react';
import { Chart, registerShape, Coord, Tooltip, Legend, Pie } from 'viser-react';

const data = [
    { type: '小学', value: 4 },
    { type: '初中', value: 41 },
    { type: '高中', value: 54 },
    { type: '大学', value: 274 },
    { type: '学院', value: 250 },
    { type: '其他', value: 192 }
];

// 可以通过调整这个数值控制分割空白处的间距，0-1 之间的数值
const sliceNumber = 0.01;

// 自定义 other 的图形，增加两条线
registerShape('interval', 'sliceShape', {
    draw: function draw(cfg, container) {
        const points = cfg.points;
        let path = [];
        path.push(['M', points[0].x, points[0].y]);
        path.push(['L', points[1].x, points[1].y - sliceNumber]);
        path.push(['L', points[2].x, points[2].y - sliceNumber]);
        path.push(['L', points[3].x, points[3].y]);
        path.push('Z');
        path = this.parsePath(path);
        return container.addShape('path', {
            attrs: {
                fill: cfg.color,
                path: path,
            },
        });
    },
});

export default class App extends React.Component {
    render() {
        return (
            <Chart forceFit={true} height={400} data={data}>
                <Coord type="theta" innerRadius={0.75} />
                <Tooltip showTitle={false} />
                <Legend dataKey="type" />
                <Pie position="value" color="type" shape="sliceShape" />
            </Chart>
        );
    }
}