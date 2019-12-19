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
    { type: '想', value: 189 },
    { type: '说', value: 156 },
    { type: '爱', value: 147 },
    { type: '没', value: 127 },
    { type: '里', value: 80 },
    { type: '做', value: 65 },
    { type: '走', value: 54 },
    { type: '时间', value: 53 },
    { type: '世界', value: 53 },
    { type: '笑', value: 47 },
    { type: '心', value: 44 },
    { type: '梦', value: 42 },
    { type: '看不惯', value: 42 },
    { type: '生活', value: 41 },
    { type: '真的', value: 39 },
    { type: '太', value: 39 },
    { type: '陪', value: 38 },
    { type: '温柔', value: 37 },
    { type: '风', value: 35 },
    { type: '孤独', value: 34 },
    { type: '听', value: 31 },
    { type: '未来', value: 30 },
    { type: '中', value: 30 },
    { type: '身边', value: 29 },
    { type: '离开', value: 29 },
    { type: '故事', value: 28 },
    { type: '更', value: 28 },
    { type: '拥抱', value: 27 },
    { type: '姑娘', value: 27 },
    { type: '回忆', value: 26 },
    { type: '问', value: 26 },
    { type: '总', value: 25 },
    { type: '期待', value: 25 },
    { type: '忘记', value: 25 },
    { type: '远方', value: 25 },
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