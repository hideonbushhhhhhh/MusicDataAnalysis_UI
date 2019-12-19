
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
        var data=[{"x": "晚安时光", "value": 748272},
            {"x": "防弹少年团", "value":496270},
            {"x": "早安世界", "value": 364788},
            {"x": "每日晚间话题", "value": 244687},
            {"x": "美图社", "value": 177351},
            {"x": "华晨宇", "value": 127473},
            {"x": "Taylor Swift", "value":125240},
            {"x": "你这一刻在听什么歌", "value":120157},
            {"x": "互动抽奖", "value": 116832},
            {"x": "GOT7", "value":61620},
            {"x": "一封来自2019的致谢信", "value": 52948},
            {"x": "网易原创音乐人突破10万", "value": 49448},
            {"x": "叶子说", "value": 47070},
            {"x": "云村最美面孔选拔大赛", "value":40045},
            {"x": "baby", "value": 1.39806210190479},
            {"x": "情感文字君的小树洞", "value": 24273},
            {"x": "华晨宇好想爱这个世界啊", "value": 15246},
            {"x": "社长万事屋", "value":15161},
            {"x": "N.Flying", "value": 14145},
            {"x": "拉吉莫拉拉", "value":13730},
            {"x": "句子收藏夹", "value": 12423} ]
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


