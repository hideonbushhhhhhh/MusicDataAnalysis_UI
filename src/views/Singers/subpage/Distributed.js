import React, {useEffect} from 'react';
import G2 from '@antv/g2';
import ReactDOM from "react-dom";
import Bar from "./bar";
import axios from "axios";
const DataSet = require( '@antv/data-set')

function Distributed(){
    let data=[{"musicSizeRange":"0-10","count":11098},{"musicSizeRange":"11-100","count":15573},{"musicSizeRange":"101-1000","count":6441},{"musicSizeRange":"1001-5000","count":473},{"musicSizeRange":"5001-10000","count":54},{"musicSizeRange":"10000以上","count":50}]
    const ref = React.useRef(null);
    useEffect(() => {
        axios.get('http://47.98.229.17:8002/blm/OrderInf/getOrderInfList?orderId=1').then(function (req) {
            data=req.data;
        })
        const chart = new G2.Chart({
            container: ReactDOM.findDOMNode(ref.current),
            forceFit: true,
            height: 500,
            padding: [ 40, 0 ]
        });
        chart.source(data);
        chart.coord('polar', {
            startAngle: Math.PI, // 起始角度
            endAngle: Math.PI * (3 / 2) // 结束角度
        });
        chart.interval()
            .position('musicSizeRange*count')
            .color('musicSizeRange', 'rgb(252,143,72)-rgb(255,215,135)')
            .label('count', {
                offset: -15,
                label: {
                    textAlign: 'center',
                    fill: '#000'
                }
            })
            .style({
                lineWidth: 1,
                stroke: '#fff'
            });

        chart.render();
    }, []);
    return(
        <div>
        <div ref={ref}></div>
    </div>
    );
}
export default Distributed
