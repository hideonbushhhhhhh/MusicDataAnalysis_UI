
import { Chart, Legend, Axis, Tooltip, Coord, Point, registerShape } from 'viser-react';
import * as React from 'react';
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
        var data=[{"x": "\u60f3", "value": 152.0}, {"x": "\u7231", "value": 106.0}, {"x": "\u8bf4", "value": 104.0}, {"x": "\u5236\u4f5c", "value": 75.0}, {"x": "\u4e2d", "value": 65.0}, {"x": "\u91cc", "value": 56.0}, {"x": "\u4e16\u754c", "value": 53.0}, {"x": "\u60f3\u8981", "value": 52.0}, {"x": "\u58f0", "value": 49.0}, {"x": "\u6296", "value": 48.0}, {"x": "\u7231\u60c5", "value": 41.0}, {"x": "\u542c", "value": 41.0}, {"x": "\u505a", "value": 39.0}, {"x": "\u5fc3", "value": 38.0}, {"x": "\u6587\u5316", "value": 38.0}, {"x": "\u966a", "value": 37.0}, {"x": "\u9e2d", "value": 36.0}, {"x": "\u592a", "value": 35.0}, {"x": "\u8d70", "value": 34.0}, {"x": "\u76d1\u5236", "value": 34.0}, {"x": "\u6709\u9650\u516c\u53f8", "value": 33.0}, {"x": "\u62e5\u62b1", "value": 32.0}, {"x": "\u7537", "value": 32.0}, {"x": "&#", "value": 32.0}, {"x": 126.0, "value": 32.0}, {"x": "\u97f3\u4e50", "value": 31.0}, {"x": "\u5409\u4ed6", "value": 31.0}, {"x": "\u5973", "value": 31.0}, {"x": "\u559c\u6b22", "value": 31.0}, {"x": "\u65f6\u95f4", "value": 30.0}, {"x": "\u8e66", "value": 30.0}, {"x": "\u53ef\u6015", "value": 29.0}, {"x": "\u66f4", "value": 28.0}, {"x": "\u79bb\u5f00", "value": 27.0}, {"x": "\u82b1", "value": 27.0}, {"x": "\u8bf7", "value": 27.0}, {"x": "\u6ca1", "value": 27.0}, {"x": "\u6765\u4e2a", "value": 27.0}, {"x": "\u751f\u6d3b", "value": 26.0}, {"x": "\u5e0c\u671b", "value": 26.0}, {"x": "\u5c0f\u53ef\u7231", "value": 26.0}, {"x": "\u601d\u5ff5", "value": 25.0}, {"x": "\u5bc2\u5bde", "value": 24.0}, {"x": "\u672a\u6765", "value": 24.0}, {"x": "\u53d1\u884c", "value": 24.0}, {"x": "\u653e\u4e0b", "value": 24.0}, {"x": "\u7f8e\u4e3d", "value": 24.0}, {"x": "\u54d2", "value": 24.0}, {"x": "\u51fa\u54c1", "value": 23.0}, {"x": "\u591c", "value": 23.0}, {"x": "\u7b11", "value": 23.0}, {"x": "\u56de\u5fc6", "value": 23.0}, {"x": "\u52c7\u6562", "value": 23.0}, {"x": "\u5317\u4eac", "value": 23.0}, {"x": "\u5fd8\u8bb0", "value": 22.0}, {"x": "\u6bcd\u5e26", "value": 21.0}, {"x": "\u516c\u53f8", "value": 21.0}, {"x": "\u67d0\u4eba", "value": 21.0}, {"x": "\u65f6\u5149", "value": 20.0}, {"x": "\u590f\u5929", "value": 20.0}, {"x": "\u5b64\u5355", "value": 19.0}, {"x": "\u98ce", "value": 19.0}, {"x": "\u5531", "value": 19.0}, {"x": "\u653e\u5f03", "value": 19.0}, {"x": "\u9ed1\u591c", "value": 19.0}, {"x": "\u7f8e\u597d", "value": 18.0}, {"x": "\u5f53\u4f5c", "value": 18.0}, {"x": "\u8eab\u8fb9", "value": 18.0}, {"x": "\u4e5f\u8bb8", "value": 17.0}, {"x": "\u671f\u5f85", "value": 17.0}, {"x": "\u660e\u5929", "value": 17.0}, {"x": "\u6709\u4eba", "value": 17.0}, {"x": "\u627e\u5230", "value": 17.0}, {"x": "\u5149", "value": 17.0}, {"x": "\u5c81\u6708", "value": 17.0}, {"x": "\u7ec8\u4e8e", "value": 17.0}, {"x": "\u4fdd\u62a4", "value": 17.0}, {"x": "\u5feb", "value": 17.0}, {"x": "\u592a\u9633", "value": 17.0}, {"x": "\u8e66\u8e66", "value": 17.0}, {"x": "\u6211\u4f1a", "value": 16.0}, {"x": "\u660e\u767d", "value": 16.0}, {"x": "\u61c2", "value": 16.0}, {"x": "\u5e26", "value": 16.0}, {"x": "\u56de\u5bb6", "value": 16.0}, {"x": "\u4e00\u70b9", "value": 16.0}, {"x": "\u771f\u7684", "value": 16.0}, {"x": "\u5929", "value": 16.0}, {"x": "\u5feb\u4e50", "value": 16.0}, {"x": "\u68a6\u60f3", "value": 16.0}, {"x": "\u8eab\u65c1", "value": 16.0}, {"x": "\u5b64\u72ec", "value": 16.0}, {"x": "\u68a6", "value": 15.0}, {"x": "\u5fae\u7b11", "value": 15.0}, {"x": "\u7f16\u5199", "value": 15.0}, {"x": "\u5f69\u8679", "value": 15.0}, {"x": "\u4e8b\u60c5", "value": 15.0}, {"x": "\u611f\u89c9", "value": 15.0}, {"x": "\u5265", "value": 15.0}, {"x": "\u53d8\u5f97", "value": 14.0}, {"x": "\u9009\u62e9", "value": 14.0}, {"x": "\u5de6\u8fb9", "value": 14.0}, {"x": "\u53f3\u8fb9", "value": 14.0}, {"x": "\u5c0f\u5ae6\u5a25", "value": 14.0}, {"x": "\u4e0d\u7528", "value": 14.0}, {"x": "\u6625\u98ce", "value": 14.0}, {"x": "\u62b1", "value": 14.0}, {"x": "\u5408", "value": 14.0}, {"x": "\u9633\u5149", "value": 14.0}, {"x": "\u8fdc\u65b9", "value": 14.0}, {"x": "\u6211\u7231\u4f60", "value": 14.0}, {"x": "\u7b49\u5f85", "value": 13.0}, {"x": "\u7406\u7531", "value": 13.0}, {"x": "\u9ed8\u9ed8", "value": 13.0}, {"x": "\u753b", "value": 13.0}, {"x": "\u4f9d\u7136", "value": 13.0}, {"x": "\u53ea\u80fd", "value": 13.0}, {"x": "\u6d41\u6d6a", "value": 13.0}, {"x": "\u68a6\u91cc", "value": 13.0}, {"x": "\u53f9", "value": 13.0}, {"x": "\u56de\u7b54", "value": 13.0}, {"x": "\u9e45", "value": 13.0}, {"x": "\u5403", "value": 13.0}, {"x": "\u7167\u4eae", "value": 13.0}, {"x": "\u6211\u8981", "value": 13.0}, {"x": "\u96e8", "value": 13.0}, {"x": "\u98ce\u666f", "value": 13.0}, {"x": "\u771f", "value": 13.0}, {"x": "\u75af\u72c2", "value": 13.0}, {"x": "\u5e73\u51e1", "value": 13.0}, {"x": "\u6e29\u67d4", "value": 13.0}, {"x": "\u53ef\u4e0d\u53ef\u4ee5", "value": 13.0}, {"x": "\u731c", "value": 13.0}, {"x": "\u8f6c\u8eab", "value": 12.0}, {"x": "\u6162\u6162", "value": 12.0}, {"x": "\u53d8", "value": 12.0}, {"x": "\u6539\u53d8", "value": 12.0}, {"x": "\u51fa\u54c1\u4eba", "value": 12.0}, {"x": "\u597d\u597d", "value": 12.0}, {"x": "\u5e2e", "value": 12.0}, {"x": "\u597d\u50cf", "value": 12.0}, {"x": "\u661f\u661f", "value": 12.0}, {"x": "\u7b80\u5355", "value": 12.0}, {"x": "\u57ce\u5e02", "value": 12.0}, {"x": "\u6545\u4e8b", "value": 12.0}, {"x": "\u603b", "value": 12.0}, {"x": "\u653e\u5f00", "value": 11.0}, {"x": "\u751c\u871c", "value": 11.0}, {"x": "\u8ddd\u79bb", "value": 11.0}, {"x": "\u624b", "value": 11.0}, {"x": "\u60b2\u4f24", "value": 11.0}, {"x": "\u7e41\u534e", "value": 11.0}, {"x": "\u7edd\u671b", "value": 11.0}, {"x": "\u6447\u6446", "value": 11.0}, {"x": "\u7ad9", "value": 11.0}, {"x": "\u8ff7\u4eba", "value": 11.0}, {"x": "\u4e8b", "value": 11.0}, {"x": "\u5fc3\u8df3", "value": 11.0}, {"x": "\u4e00\u53e5", "value": 11.0}, {"x": "\u5fc3\u60c5", "value": 11.0}, {"x": "\u4e00\u751f", "value": 11.0}, {"x": "\u90a3\u5929", "value": 11.0}, {"x": "\u5e7b\u60f3", "value": 11.0}, {"x": "\u4e0d\u505c", "value": 11.0}, {"x": "\u5435", "value": 11.0}, {"x": "\u4e0d\u5230", "value": 10.0}, {"x": "\u4e0d\u60f3", "value": 10.0}, {"x": "\u5c11", "value": 10.0}, {"x": "\u4e00\u573a", "value": 10.0}, {"x": "\u4f01\u5212", "value": 10.0}, {"x": "\u95e8", "value": 10.0}, {"x": "\u7275\u6302", "value": 10.0}, {"x": "\u6708", "value": 10.0}, {"x": "\u843d", "value": 10.0}, {"x": "\u5fc3\u4e8b", "value": 10.0}, {"x": "\u54ed", "value": 10.0}, {"x": "\u706f", "value": 10.0}, {"x": "\u9f99", "value": 10.0}, {"x": "\u4e24\u4e2a", "value": 10.0}, {"x": "\u7edf\u7b79", "value": 10.0}, {"x": "\u5fe7\u6101", "value": 10.0}, {"x": "\u8e49\u8dce", "value": 10.0}, {"x": "\u6b4c\u5531", "value": 10.0}, {"x": "\u5343\u5e74", "value": 10.0}, {"x": "\u4e00\u4eba", "value": 10.0}, {"x": "\u56de\u5230", "value": 10.0}, {"x": "\u670b\u53cb", "value": 10.0}, {"x": "\u5439", "value": 10.0}, {"x": "\u6c38\u8fdc", "value": 10.0}, {"x": "\u4e00\u7b14", "value": 10.0}, {"x": "\u914d\u5531", "value": 10.0}, {"x": "\u6000\u91cc", "value": 10.0}, {"x": "\u6709\u592a\u591a", "value": 10.0}, {"x": "\u6d6a\u6f2b", "value": 10.0}, {"x": "\u60f3\u5ff5", "value": 10.0}, {"x": "\u65b9", "value": 10.0}, {"x": "\u5168\u4e16\u754c", "value": 10.0}, {"x": "\u4e4b\u95f4", "value": 10.0}, {"x": "\u591a\u60f3", "value": 10.0}, {"x": "\u811a\u6b65", "value": 10.0}, {"x": "\u70e6\u607c", "value": 10.0}, {"x": "\u83dc", "value": 10.0}, {"x": "\u81ea\u6211", "value": 10.0}, {"x": "\u6162\u6162\u6765", "value": 10.0}, {"x": "\u4eab\u53d7", "value": 10.0}]
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
                <Chart width={640} height={400} data={data} scale={scale} padding={[0]}>
                    <Tooltip showTitle={false}></Tooltip>
                    <Coord type="rect" direction="TL"></Coord>
                    <Point position="x*y" color="category" shape="cloud" tooltip="value*category"></Point>
                </Chart>
            </div>
        );
    }
}


