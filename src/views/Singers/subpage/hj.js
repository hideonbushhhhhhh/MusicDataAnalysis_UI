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
    { type: '谢霆锋', value: 29 },
    { type: '范冰冰', value: 24 },
    { type: '王源', value: 23 },
    { type: '王俊凯', value: 20 },
    { type: '巩俐', value: 19 },
    { type: '周迅', value: 18 },
    { type: '蔡依林', value: 17 },
    { type: '郭富城', value: 17 },
    { type: '黎明', value: 17 },
    { type: '李宇春', value: 16 },
    { type: '汪峰', value: 16 },
    { type: '孙燕姿', value: 16 },
    { type: '张靓颖', value: 16 },
    { type: '张曼玉', value: 15 },
    { type: '成龙', value: 15 },
    { type: '罗志祥', value: 15 },
    { type: '许嵩', value: 15 },
    { type: '周星驰', value: 15 },
    { type: '周星星', value: 14 },
    { type: '梁朝伟', value: 14 },
    { type: '周笔畅', value: 14 },
    { type: '赵薇', value: 14 },
    { type: '章子怡', value: 14 },
    { type: '林志颖', value: 13 },
    { type: '苏醒', value: 13 },
    { type: '张杰', value: 13 },
    { type: '郑源', value: 13 },
    { type: '那英', value: 13 },
    { type: '梁静茹', value: 13 },
    { type: '王菲', value: 13 },
    { type: '秦海璐', value: 13 },
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
