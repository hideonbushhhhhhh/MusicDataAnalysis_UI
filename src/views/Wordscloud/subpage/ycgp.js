

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
        var data=[{"x": "\u60f3", "value": 189.0}, {"x": "\u8bf4", "value": 156.0}, {"x": "\u7231", "value": 147.0}, {"x": "\u6ca1", "value": 127.0}, {"x": "\u91cc", "value": 80.0}, {"x": "\u505a", "value": 65.0}, {"x": "\u8d70", "value": 54.0}, {"x": "\u65f6\u95f4", "value": 53.0}, {"x": "\u4e16\u754c", "value": 53.0}, {"x": "\u60f3\u8981", "value": 52.0}, {"x": "\u7b11", "value": 47.0}, {"x": "\u5fc3", "value": 44.0}, {"x": "\u68a6", "value": 42.0}, {"x": "\u770b\u4e0d\u60ef", "value": 42.0}, {"x": "\u751f\u6d3b", "value": 41.0}, {"x": "\u771f\u7684", "value": 39.0}, {"x": "\u592a", "value": 39.0}, {"x": "\u966a", "value": 38.0}, {"x": "\u6e29\u67d4", "value": 37.0}, {"x": "\u98ce", "value": 35.0}, {"x": "\u5b64\u72ec", "value": 34.0}, {"x": "\u542c", "value": 31.0}, {"x": "\u672a\u6765", "value": 30.0}, {"x": "\u4e2d", "value": 30.0}, {"x": "\u8eab\u8fb9", "value": 29.0}, {"x": "\u79bb\u5f00", "value": 29.0}, {"x": "\u6545\u4e8b", "value": 28.0}, {"x": "\u66f4", "value": 28.0}, {"x": "\u62e5\u62b1", "value": 27.0}, {"x": "\u59d1\u5a18", "value": 27.0}, {"x": "\u56de\u5fc6", "value": 26.0}, {"x": "\u95ee", "value": 26.0}, {"x": "\u603b", "value": 25.0}, {"x": "\u671f\u5f85", "value": 25.0}, {"x": "\u5fd8\u8bb0", "value": 25.0}, {"x": "\u8fdc\u65b9", "value": 25.0}, {"x": "\u5730\u65b9", "value": 24.0}, {"x": "\u6015", "value": 24.0}, {"x": "\u5feb\u4e50", "value": 24.0}, {"x": "\u61c2", "value": 24.0}, {"x": "\u7ea2\u5934\u53d1", "value": 24.0}, {"x": "\u6211\u4f1a", "value": 24.0}, {"x": "\u6b22\u4e50", "value": 24.0}, {"x": "\u597d\u50cf", "value": 24.0}, {"x": "\u4e0d\u60f3", "value": 24.0}, {"x": "\u4e00\u751f", "value": 24.0}, {"x": "\u8bf7", "value": 23.0}, {"x": "\u611f\u89c9", "value": 23.0}, {"x": "\u5b64\u5355", "value": 23.0}, {"x": "\u4e0d\u77e5", "value": 23.0}, {"x": "\u97f3\u4e50", "value": 23.0}, {"x": "\u8def\u4e0a", "value": 23.0}, {"x": "\u732b", "value": 23.0}, {"x": "\u62e5\u6709", "value": 22.0}, {"x": "\u4e5f\u8bb8", "value": 22.0}, {"x": "\u7b49\u5f85", "value": 22.0}, {"x": "\u7559\u4e0b", "value": 22.0}, {"x": "\u627e", "value": 22.0}, {"x": "\u624b", "value": 22.0}, {"x": "\u559c\u6b22", "value": 22.0}, {"x": "\u6c38\u8fdc", "value": 21.0}, {"x": "\u82b1", "value": 21.0}, {"x": "\u5929\u7a7a", "value": 21.0}, {"x": "\u4eba\u95f4", "value": 21.0}, {"x": "\u5e78\u798f", "value": 21.0}, {"x": "\u5f00", "value": 20.0}, {"x": "\u8def", "value": 20.0}, {"x": "\u5fd8", "value": 20.0}, {"x": "\u4e0d\u7528", "value": 20.0}, {"x": "\u8bb0\u5f97", "value": 20.0}, {"x": "\u5199", "value": 20.0}, {"x": "\u547c\u5438", "value": 20.0}, {"x": "\u50cf\u662f", "value": 20.0}, {"x": "\u7528\u529b", "value": 20.0}, {"x": "\u6709\u4eba", "value": 19.0}, {"x": "\u8bb2", "value": 19.0}, {"x": "\u8138", "value": 19.0}, {"x": "\u660e\u5929", "value": 19.0}, {"x": "\u65b9\u5411", "value": 19.0}, {"x": "\u773c\u775b", "value": 19.0}, {"x": "\u61c2\u5f97", "value": 19.0}, {"x": "\u4eba\u751f", "value": 19.0}, {"x": "\u5bb3\u6015", "value": 19.0}, {"x": "\u9057\u61be", "value": 19.0}, {"x": "\u8bf4\u5531", "value": 19.0}, {"x": "\u65e9\u5df2", "value": 19.0}, {"x": "\u4e00\u79cd", "value": 18.0}, {"x": "\u4e00\u53e5", "value": 18.0}, {"x": "\u4f9d\u7136", "value": 18.0}, {"x": "\u6765\u5230", "value": 18.0}, {"x": "\u8001", "value": 18.0}, {"x": "\u65f6\u5149", "value": 18.0}, {"x": "\u4ece\u524d", "value": 18.0}, {"x": "\u4e60\u60ef", "value": 17.0}, {"x": "\u5e26", "value": 17.0}, {"x": "\u8dd1", "value": 17.0}, {"x": "\u591c\u665a", "value": 17.0}, {"x": "\u773c\u6cea", "value": 17.0}, {"x": "\u5bfb\u627e", "value": 17.0}, {"x": "\u5f53\u521d", "value": 17.0}, {"x": "\u6211\u8981", "value": 17.0}, {"x": "\u6d77", "value": 16.0}, {"x": "\u5450", "value": 16.0}, {"x": "\u5b8c", "value": 16.0}, {"x": "\u6389", "value": 16.0}, {"x": "\u4e1c\u897f", "value": 16.0}, {"x": "\u60f3\u5ff5", "value": 16.0}, {"x": "\u5e0c\u671b", "value": 16.0}, {"x": "\u90a3\u8be5", "value": 16.0}, {"x": "\u51fa", "value": 15.0}, {"x": "\u8fdc", "value": 15.0}, {"x": "\u81ea\u7531", "value": 15.0}, {"x": "\u9047\u89c1", "value": 15.0}, {"x": "\u751f\u547d", "value": 15.0}, {"x": "\u96be\u8fc7", "value": 15.0}, {"x": "\u53d1\u73b0", "value": 15.0}, {"x": "\u5783\u573e", "value": 15.0}, {"x": "\u4e0d\u5230", "value": 15.0}, {"x": "\u6162\u6162", "value": 15.0}, {"x": "\u5c11\u5e74", "value": 15.0}, {"x": "\u8db3\u77e3", "value": 15.0}, {"x": "\u6df1\u7231", "value": 14.0}, {"x": "\u8106\u5f31", "value": 14.0}, {"x": "\u8bf4\u8bdd", "value": 14.0}, {"x": "\u7ec8\u4e8e", "value": 14.0}, {"x": "\u611f\u53d7", "value": 14.0}, {"x": "\u4ece\u6765\u4e0d", "value": 14.0}, {"x": "\u544a\u8bc9", "value": 14.0}, {"x": "\u56de\u5230", "value": 14.0}, {"x": "\u5fc3\u4e2d", "value": 14.0}, {"x": "\u73b0\u5b9e", "value": 14.0}, {"x": "\u4e0d\u5728\u4e4e", "value": 14.0}, {"x": "\u76f8\u9047", "value": 14.0}, {"x": "\u653e\u5f03", "value": 13.0}, {"x": "\u85cf", "value": 13.0}, {"x": "\u6a21\u6837", "value": 13.0}, {"x": "\u9192\u6765", "value": 13.0}, {"x": "\u5bc2\u5bde", "value": 13.0}, {"x": "\u7f8e\u4e3d", "value": 13.0}, {"x": "\u4e0d\u5b89", "value": 13.0}, {"x": "\u5929\u5730", "value": 13.0}, {"x": "\u4e00\u573a", "value": 13.0}, {"x": "\u6708\u5149", "value": 13.0}, {"x": "\u661f\u8fb0", "value": 13.0}, {"x": "\u8bdd", "value": 13.0}, {"x": "\u4eb2\u7231", "value": 13.0}, {"x": "\u53d8", "value": 13.0}, {"x": "\u4e8b", "value": 13.0}, {"x": "\u65e9\u5c31", "value": 13.0}, {"x": "\u56de", "value": 13.0}, {"x": "\u9a84\u50b2", "value": 13.0}, {"x": "\u90a3\u5929", "value": 13.0}, {"x": "\u68a6\u60f3", "value": 13.0}, {"x": "\u76f8\u9022", "value": 13.0}, {"x": "\u53d8\u5f97", "value": 12.0}, {"x": "\u65b0", "value": 12.0}, {"x": "\u771f\u5b9e", "value": 12.0}, {"x": "\u9057\u5fd8", "value": 12.0}, {"x": "\u5929", "value": 12.0}, {"x": "\u6c89\u9ed8", "value": 12.0}, {"x": "\u4e24\u4e2a", "value": 12.0}, {"x": "\u660e\u767d", "value": 12.0}, {"x": "\u53ef\u7231", "value": 12.0}, {"x": "\u68a6\u91cc", "value": 12.0}, {"x": "\u5feb", "value": 12.0}, {"x": "\u601d\u5ff5", "value": 12.0}, {"x": "\u9009\u62e9", "value": 12.0}, {"x": "\u6362", "value": 12.0}, {"x": "\u591a\u4e45", "value": 12.0}, {"x": "\u773c\u91cc", "value": 12.0}, {"x": "\u57ce\u5e02", "value": 12.0}, {"x": "\u6cea", "value": 12.0}, {"x": "\u8282\u594f", "value": 12.0}, {"x": "\u9752\u6625", "value": 12.0}, {"x": "\u7ad9", "value": 12.0}, {"x": "\u6d6a\u6f2b", "value": 12.0}, {"x": "\u7231\u60c5", "value": 12.0}, {"x": "\u96be", "value": 12.0}, {"x": "\u559d", "value": 11.0}, {"x": "\u9ebb\u70e6", "value": 11.0}, {"x": "\u9762\u5bf9", "value": 11.0}, {"x": "\u957f\u5927", "value": 11.0}, {"x": "\u54ed", "value": 11.0}, {"x": "\u773c\u795e", "value": 11.0}, {"x": "\u5269\u4e0b", "value": 11.0}, {"x": "\u8bb0\u5fc6", "value": 11.0}, {"x": "\u5148", "value": 11.0}, {"x": "\u524d", "value": 11.0}, {"x": "\u8d70\u8fc7", "value": 11.0}, {"x": "\u6068", "value": 11.0}, {"x": "\u5185\u5fc3", "value": 11.0}, {"x": "\u5c81\u6708", "value": 11.0}, {"x": "\u7ea2\u8272", "value": 11.0}, {"x": "\u6000\u62b1", "value": 11.0}, {"x": "\u602a", "value": 11.0}, {"x": "\u518d\u4e5f", "value": 11.0}, {"x": "\u6d41\u6d6a", "value": 11.0}, {"x": "\u6700\u7f8e", "value": 11.0}, {"x": "\u65ad", "value": 11.0}, {"x": "\u77ac\u95f4", "value": 11.0}, {"x": "\u505c\u7559", "value": 11.0}, {"x": "\u8eb2", "value": 11.0}, {"x": "\u4e45", "value": 11.0}, {"x": "\u670b\u53cb", "value": 11.0}, {"x": "\u8138\u5e9e", "value": 11.0}, {"x": "\u65e5\u5b50", "value": 11.0}, {"x": "\u5149", "value": 11.0}, {"x": "\u7231\u4eba", "value": 11.0}, {"x": "\u4e00\u70b9", "value": 11.0}, {"x": "\u9ed1\u591c", "value": 11.0}, {"x": "\u53cd\u6b63", "value": 11.0}, {"x": "\u82cd\u832b", "value": 11.0}, {"x": "\u6865\u8fb9", "value": 11.0}, {"x": "\u5934", "value": 10.0}, {"x": "\u73a9", "value": 10.0}, {"x": "\u8eab\u4e0a", "value": 10.0}, {"x": "\u9ad8", "value": 10.0}, {"x": "\u592a\u9633", "value": 10.0}, {"x": "\u60b2\u4f24", "value": 10.0}, {"x": "\u62b1", "value": 10.0}, {"x": "\u542c\u5230", "value": 10.0}, {"x": "\u76f8\u7231", "value": 10.0}, {"x": "\u4f59\u751f", "value": 10.0}, {"x": "\u6c5f\u6e56", "value": 10.0}, {"x": "\u4e0d\u89c1", "value": 10.0}, {"x": "\u7403", "value": 10.0}, {"x": "\u7761", "value": 10.0}, {"x": "\u5fc3\u8df3", "value": 10.0}, {"x": "\u5fae\u7b11", "value": 10.0}, {"x": "\u4f9d\u65e7", "value": 10.0}, {"x": "\u518d\u89c1", "value": 10.0}, {"x": "\u56de\u5934", "value": 10.0}, {"x": "\u4e0a\u5929", "value": 10.0}, {"x": "\u611f\u60c5", "value": 10.0}, {"x": "\u65e9", "value": 10.0}, {"x": "\u770b\u7740", "value": 10.0}, {"x": "\u75af\u72c2", "value": 10.0}, {"x": "\u5fe7\u4f24", "value": 10.0}, {"x": "\u7a7f\u8fc7", "value": 10.0}, {"x": "\u7b80\u5355", "value": 10.0}, {"x": "\u7528\u5fc3", "value": 10.0}, {"x": "\u5e26\u4f60\u53bb", "value": 10.0}, {"x": "\u8def\u53e3", "value": 10.0}, {"x": "\u9001", "value": 10.0}, {"x": "\u6000\u91cc", "value": 10.0}, {"x": "\u5c3d\u5934", "value": 10.0}, {"x": "\u7ed3\u675f", "value": 10.0}, {"x": "\u4e2d\u56fd", "value": 10.0}, {"x": "\u539f\u8c05", "value": 10.0}, {"x": "\u5fc3\u4e8b", "value": 10.0}, {"x": "\u665a\u971e", "value": 10.0}, {"x": "\u4e0d\u53bb", "value": 10.0}, {"x": "\u611f\u8c22", "value": 10.0}, {"x": "\u62ac\u5934", "value": 10.0}, {"x": "\u7559\u5728", "value": 10.0}, {"x": "\u9519\u8fc7", "value": 10.0}, {"x": "\u7b11\u5bb9", "value": 10.0}, {"x": "\u5fae\u98ce", "value": 10.0}]
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


