import * as React from 'react';
import {
    Chart,
    Coord,
    registerShape,
    Tooltip,
    StackInterval,
    Legend,
} from 'viser-react';

const data = [
    { type: '动词', value: 9173 },
    { type: '名词', value: 5394 },
    { type: '数词', value: 5224 },
    { type: '代词', value: 4958 },
    { type: '副词', value: 3053 },
    { type: '形容词', value: 1480 },
    { type: '介词', value: 1308 },
    { type: '连词', value: 920 },
    { type: '时间词', value: 616 },
    { type: '人名', value: 528 },
    { type: '成语', value: 479 },
    { type: '方位词', value: 419 },
    { type: '习语词', value: 356 },
    { type: '处所词', value: 307 },
    { type: '其他词语', value: 1498 }
];

// 根据比例，获取两点之间的点
function getPoint(p0, p1, ratio) {
    return {
        x: (1 - ratio) * p0.x + ratio * p1.x,
        y: (1 - ratio) * p0.y + ratio * p1.y,
    };
}

const pointRatio = 0.7; // 设置开始变成圆弧的位置 0.7
// 可以通过调整这个数值控制分割空白处的间距，0-1 之间的数值
const sliceNumber = 0.005;

// 自定义 other 的图形，增加两条线
registerShape('interval', 'platelet', {
    draw: function draw(cfg, container) {
        cfg.points[1].y = cfg.points[1].y - sliceNumber;
        cfg.points[2].y = cfg.points[2].y - sliceNumber;
        let centerPoint = {
            x: cfg.points[3].x,
            y: (cfg.points[2].y + cfg.points[3].y) / 2,
        };
        centerPoint = this.parsePoint(centerPoint);
        const points = this.parsePoints(cfg.points);
        const path = [];
        const tmpPoint1 = getPoint(points[0], points[3], pointRatio);
        const tmpPoint2 = getPoint(points[1], points[2], pointRatio);
        path.push(['M', points[0].x, points[0].y]);
        path.push(['L', tmpPoint1.x, tmpPoint1.y]);
        path.push(['Q', points[3].x, points[3].y, centerPoint.x, centerPoint.y]);
        path.push(['Q', points[2].x, points[2].y, tmpPoint2.x, tmpPoint2.y]);
        path.push(['L', points[1].x, points[1].y]);
        path.push(['z']);
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
            <Chart height={400} forceFit={true} padding={[40, 0]} data={data}>
                <Tooltip />
                <Legend dataKey="type" />
                <Coord type="theta" />
                <StackInterval
                    position="value"
                    color="type"
                    shape="platelet"
                    label="type"
                />
            </Chart>
        );
    }
}