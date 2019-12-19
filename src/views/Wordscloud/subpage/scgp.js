
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
        var data=[{"x": "\u60f3", "value": 120.0}, {"x": "\u8bf4", "value": 104.0}, {"x": "\u6ca1", "value": 92.0}, {"x": "\u91cc", "value": 63.0}, {"x": "\u7231", "value": 56.0}, {"x": "\u60f3\u8981", "value": 45.0}, {"x": "\u505a", "value": 44.0}, {"x": "\u8bf4\u5531", "value": 41.0}, {"x": "\u8d70", "value": 39.0}, {"x": "\u771f\u7684", "value": 38.0}, {"x": "\u5403", "value": 38.0}, {"x": "\u542c", "value": 35.0}, {"x": "\u592a", "value": 33.0}, {"x": "\u751f\u6d3b", "value": 32.0}, {"x": "\u7279\u522b", "value": 31.0}, {"x": "\u97f3\u4e50", "value": 31.0}, {"x": "\u8273\u9633\u5929", "value": 31.0}, {"x": "\u66f4", "value": 30.0}, {"x": "\u4e16\u754c", "value": 29.0}, {"x": "\u966a", "value": 28.0}, {"x": "\u65f6\u95f4", "value": 26.0}, {"x": "\u8c46\u6d46", "value": 26.0}, {"x": "\u6211\u4f1a", "value": 25.0}, {"x": "\u50cf\u662f", "value": 25.0}, {"x": "\u4e2d", "value": 24.0}, {"x": "\u559c\u6b22", "value": 24.0}, {"x": "\u5feb", "value": 24.0}, {"x": "\u517b", "value": 24.0}, {"x": "\u6b22\u4e50", "value": 23.0}, {"x": "\u9762\u5bf9", "value": 22.0}, {"x": "\u4e0d\u60f3", "value": 20.0}, {"x": "\u5e26", "value": 20.0}, {"x": "\u7b11", "value": 20.0}, {"x": "\u6cb9\u6761", "value": 20.0}, {"x": "\u5fc3", "value": 19.0}, {"x": "\u79bb\u5f00", "value": 19.0}, {"x": "\u65b0", "value": 19.0}, {"x": "\u6c38\u8fdc", "value": 19.0}, {"x": "\u5e0c\u671b", "value": 19.0}, {"x": "\u4e0d\u5728\u4e4e", "value": 19.0}, {"x": "\u4e0d\u7528", "value": 18.0}, {"x": "\u95ee", "value": 18.0}, {"x": "\u624b", "value": 18.0}, {"x": "\u8eab\u8fb9", "value": 18.0}, {"x": "\u7ad9", "value": 18.0}, {"x": "\u672a\u6765", "value": 18.0}, {"x": "\u4e0d\u505c", "value": 18.0}, {"x": "\u751f\u547d", "value": 17.0}, {"x": "\u8def\u4e0a", "value": 17.0}, {"x": "\u6211\u8981", "value": 17.0}, {"x": "\u94b1", "value": 17.0}, {"x": "\u5199", "value": 16.0}, {"x": "\u4e8b", "value": 16.0}, {"x": "\u821e\u53f0", "value": 16.0}, {"x": "\u8d5a", "value": 16.0}, {"x": "\u8bf7", "value": 16.0}, {"x": "\u53d8\u5f97", "value": 16.0}, {"x": "\u90a3\u8be5", "value": 16.0}, {"x": "\u9009\u62e9", "value": 15.0}, {"x": "\u611f\u89c9", "value": 15.0}, {"x": "\u6015", "value": 15.0}, {"x": "\u72d7", "value": 15.0}, {"x": "\u6709\u592a\u591a", "value": 15.0}, {"x": "\u53d8", "value": 15.0}, {"x": "\u8bb2", "value": 15.0}, {"x": "\u8001\u5b50", "value": 15.0}, {"x": "\u6bcf\u6b21", "value": 15.0}, {"x": "\u8db3\u77e3", "value": 15.0}, {"x": "\u5934", "value": 14.0}, {"x": "\u5b8c", "value": 14.0}, {"x": "\u61c2", "value": 14.0}, {"x": "\u8bb0\u5f97", "value": 14.0}, {"x": "\u53ea\u80fd", "value": 14.0}, {"x": "\u5b9a\u4e49", "value": 14.0}, {"x": "\u5531", "value": 14.0}, {"x": "\u770b\u7740", "value": 14.0}, {"x": "\u5e74", "value": 14.0}, {"x": "\u5e2e", "value": 14.0}, {"x": "\u8eab\u4f53", "value": 13.0}, {"x": "\u4e00\u751f", "value": 13.0}, {"x": "\u9152\u7cbe", "value": 13.0}, {"x": "\u4ece\u6765\u4e0d", "value": 13.0}, {"x": "\u544a\u8bc9", "value": 13.0}, {"x": "\u7a7f", "value": 13.0}, {"x": "\u7406\u89e3", "value": 13.0}, {"x": "\u4e2d\u56fd", "value": 13.0}, {"x": "\u524d", "value": 13.0}, {"x": "\u505c\u7559", "value": 13.0}, {"x": "\u732b", "value": 13.0}, {"x": "\u70b9", "value": 12.0}, {"x": "\u6b4c", "value": 12.0}, {"x": "\u73a9", "value": 12.0}, {"x": "\u9a84\u50b2", "value": 12.0}, {"x": "\u8138", "value": 12.0}, {"x": "\u6539\u53d8", "value": 12.0}, {"x": "\u6b32\u671b", "value": 12.0}, {"x": "\u65b9\u5411", "value": 12.0}, {"x": "\u4e70", "value": 12.0}, {"x": "\u75af\u72c2", "value": 11.0}, {"x": "\u9001", "value": 11.0}, {"x": "\u611f\u53d7", "value": 11.0}, {"x": "\u6e38\u620f", "value": 11.0}, {"x": "\u6e29\u6696", "value": 11.0}, {"x": "\u5f00", "value": 11.0}, {"x": "\u53d1\u73b0", "value": 11.0}, {"x": "\u6000\u91cc", "value": 11.0}, {"x": "\u81ea\u6211", "value": 11.0}, {"x": "\u65e9\u5df2", "value": 11.0}, {"x": "\u4eba\u751f", "value": 11.0}, {"x": "\u98de", "value": 11.0}, {"x": "\u8def", "value": 11.0}, {"x": "\u989c\u8272", "value": 11.0}, {"x": "\u73b0\u5b9e", "value": 11.0}, {"x": "\u5144\u5f1f", "value": 11.0}, {"x": "\u8eab\u4e0a", "value": 11.0}, {"x": "\u611f\u5230", "value": 11.0}, {"x": "\u5929\u7a7a", "value": 11.0}, {"x": "\u61c2\u5f97", "value": 11.0}, {"x": "\u5bb6\u91cc", "value": 11.0}, {"x": "\u903c", "value": 11.0}, {"x": "\u540e\u9000", "value": 11.0}, {"x": "\u88c5\u8fdb", "value": 11.0}, {"x": "\u4fdd\u9669\u67dc", "value": 11.0}, {"x": "\u9762\u5b50", "value": 11.0}, {"x": "\u4eba\u7269", "value": 11.0}, {"x": "\u592f\u5b9e", "value": 11.0}, {"x": "\u6162", "value": 10.0}, {"x": "\u9501", "value": 10.0}, {"x": "\u9047\u89c1", "value": 10.0}, {"x": "\u56de\u5fc6", "value": 10.0}, {"x": "\u60f3\u5ff5", "value": 10.0}, {"x": "\u68a6", "value": 10.0}, {"x": "\u80cc", "value": 10.0}, {"x": "\u57ce\u5e02", "value": 10.0}, {"x": "\u603b", "value": 10.0}, {"x": "\u611f\u60c5", "value": 10.0}, {"x": "\u6d6a\u6f2b", "value": 10.0}, {"x": "\u7559\u4e0b", "value": 10.0}, {"x": "\u5b64\u72ec", "value": 10.0}, {"x": "\u95f4", "value": 10.0}, {"x": "\u516c\u53f8", "value": 10.0}, {"x": "\u8fdc", "value": 10.0}, {"x": "\u51fa", "value": 10.0}, {"x": "\u5730\u65b9", "value": 10.0}, {"x": "\u9633\u5149", "value": 10.0}, {"x": "\u653e\u5f03", "value": 10.0}, {"x": "\u5929", "value": 10.0}, {"x": "\u547d", "value": 10.0}, {"x": "\u4e00\u8def", "value": 10.0}, {"x": "\u5fd9", "value": 10.0}, {"x": "\u7a7a\u6c14", "value": 10.0}, {"x": "\u8349\u8393", "value": 10.0}, {"x": "\u53ea\u4f1a", "value": 10.0}, {"x": "\u9152", "value": 10.0}, {"x": "\u591a\u4e45", "value": 10.0}, {"x": "\u4f55\u7b49", "value": 10.0}]
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


