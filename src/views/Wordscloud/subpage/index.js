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
        var data=[{"x": "\u7231", "value": 9.54533611599624}, {"x": "\u4e16\u754c", "value": 2.75510933416976}, {"x": "\u5fc3", "value": 2.6945908901557503}, {"x": "\u68a6", "value": 2.05039930126723}, {"x": "\u6c38\u8fdc", "value": 1.96314948766978}, {"x": "\u542c", "value": 1.7635820310586299}, {"x": "\u7231\u60c5", "value": 1.74476681813295}, {"x": "\u65f6\u95f4", "value": 1.7281887799148898}, {"x": "\u5feb\u4e50", "value": 1.53642275305342}, {"x": "\u7b11", "value": 1.52885077711992}, {"x": "love", "value": 1.51726335940349}, {"x": "\u5e78\u798f", "value": 1.51634554413882}, {"x": "\u966a", "value": 1.42691591928778}, {"x": "\u5531", "value": 1.4035689934928}, {"x": "baby", "value": 1.39806210190479}, {"x": "\u7f8e\u4e3d", "value": 1.28402355526986}, {"x": "\u56de\u5fc6", "value": 1.28213056128648}, {"x": "\u611f\u89c9", "value": 1.25224420173074}, {"x": "\u79bb\u5f00", "value": 1.2364692518692701}, {"x": "\u5bc2\u5bde", "value": 1.2106556975504998}, {"x": "\u559c\u6b22", "value": 1.1995271874664}, {"x": "\u751f\u6d3b", "value": 1.1975194665749398}, {"x": "\u8eab\u8fb9", "value": 1.1119331931446998}, {"x": "\u672a\u6765", "value": 1.09128234968968}, {"x": "\u5e0c\u671b", "value": 1.0865785464582498}, {"x": "\u624b", "value": 1.06873851225128}, {"x": "\u5fd8\u8bb0", "value": 0.9915846665651709}, {"x": "\u61c2", "value": 0.979997248848744}, {"x": "\u4e00\u751f", "value": 0.9781042548653669}, {"x": "\u6e29\u67d4", "value": 0.9778748010492}, {"x": "\u5fd8", "value": 0.977243803054741}, {"x": "\u68a6\u60f3", "value": 0.950225616201091}, {"x": "\u7b49\u5f85", "value": 0.9498240720227991}, {"x": "\u670b\u53cb", "value": 0.942940457537793}, {"x": "\u8def", "value": 0.941735825002917}, {"x": "\u5929\u7a7a", "value": 0.9378924735821209}, {"x": "\u95ee", "value": 0.937433565949788}, {"x": "\u8bb0\u5f97", "value": 0.936458387231078}, {"x": "\u751f\u547d", "value": 0.9273375980384451}, {"x": "\u773c\u6cea", "value": 0.900548865000962}, {"x": "\u97f3\u4e50", "value": 0.857985182102005}, {"x": "\u98ce", "value": 0.853396105778668}, {"x": "\u660e\u5929", "value": 0.838940515360154}, {"x": "\u601d\u5ff5", "value": 0.823968653855265}, {"x": "\u54ed", "value": 0.818633852629385}, {"x": "\u6545\u4e8b", "value": 0.795057473018238}, {"x": "\u660e\u767d", "value": 0.7937954770293211}, {"x": "\u5929", "value": 0.78209333240481}, {"x": "\u62e5\u62b1", "value": 0.778192617529973}, {"x": "\u6708", "value": 0.778135254075931}]
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


