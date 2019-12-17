import { Chart, Tooltip, Legend, View, Polygon, Point } from 'viser-react';
import * as React from 'react';
import * as $ from 'jquery';
import G2 from '@antv/g2/build/g2'
import ReactDOM from "react-dom";
import {useEffect} from "react";
import {Input, Select} from "antd";

const DataSet = require('@antv/data-set');


function WorldGeo() {
    const ref = React.useRef(null);
    let chart = null;
    useEffect(() => {
        fetch('https:/g2.antv.vision/zh/examples/data/world.geo.json')
            .then(res => res.json())
            .then(mapData => {
                if(chart==null){
                    chart = new G2.Chart({
                        container: ReactDOM.findDOMNode(ref.current),
                        forceFit: true,
                        height: 500,
                        padding: [ 55, 20 ]
                    });
                    chart.tooltip({
                        showTitle: false
                    });
                    // 同步度量
                    chart.scale({
                        longitude: {
                            sync: true
                        },
                        latitude: {
                            sync: true
                        }
                    });
                    chart.axis(false);
                    chart.legend('trend', {
                        position: 'left'
                    });

                    // 绘制世界地图背景
                    const ds = new DataSet();
                    const worldMap = ds.createView('back')
                        .source(mapData, {
                            type: 'GeoJSON'
                        });
                    const worldMapView = chart.view();
                    worldMapView.source(worldMap);
                    worldMapView.tooltip(false);
                    worldMapView.polygon().position('longitude*latitude').style({
                        fill: '#fff',
                        stroke: '#ccc',
                        lineWidth: 1
                    });

                    // 可视化用户数据
                    const userData = [
                        {name: 'China',value: 2624.0},
                        {name: 'United Kingdom', value: 165.0},
                        {name: 'India',value: 10.0},
                        {name: 'Italy',value : 21.0},
                        {name: 'Israel',value: 4.0},
                        {name: 'Jamaica', value: 3.0},
                        {name: 'Hungary',value: 2.0},
                        {name: 'New Zealand',value: 5.0},
                        {name: 'Singapore',value: 32.0},
                        {name: 'Spain',value: 19.0},
                        {name: 'Uzbekistan',value: 2.0},
                        {name: 'Ukraine',value: 3.0},
                        {name: 'worthing',value: 2.0},
                        {name: 'Turkey',value: 3.0},
                        {name: 'Thailand', value: 95.0},
                        {name: 'Scotland',value: 3.0},
                        {name: 'Switzerland',value : 5.0},
                        {name: 'Sweden',value: 31.0},
                        {name: 'Japan',value: 1558.0},
                        {name: 'Portugal',value : 2.0},
                        {name: 'Norway',value : 13.0},
                        {name: 'Nigeria', value: 2.0},
                        {name: 'South Africa',value : 2.0},
                        {name: 'Mexico',value : 4.0},
                        {name: 'Morocco',value : 2.0},
                        {name: 'United States of America',value: 559.0},
                        {name: 'Malaysia',value: 45.0},
                        {name: 'Romania',value: 7.0},
                        {name: 'Rome',value : 2.0},
                        {name: 'Canada',value : 80.0},
                        {name: 'Netherlands',value: 16.0},
                        {name: 'Korea', value: 943.0},
                        {name: 'Kazakhstan',value : 2.0},
                        {name: 'Finland', value: 11.0},
                        {name: 'Philippines',value: 7.0},
                        {name: 'France',value: 52.0},
                        {name: 'Russia',value:8.0},
                        {name: 'Germany',value:50.0},
                        {name: 'Denmark',value: 9.0},
                        {name: 'Poland',value: 4.0},
                        {name: 'Puerto Rico',value: 2.0},
                        {name: 'Iceland',value: 3.0},
                        {name: 'Belgium',value: 4.0},
                        {name: 'Bulgaria',value: 3.0},
                        {name: 'Brazil',value: 12.0},
                        {name: 'Australia',value:36.0},
                        {name: 'Austria',value:4.0},
                        {name: 'Ireland',value: 19.0},
                        {name: 'Egypt',value: 4.0},
                    ];
                    const userDv = ds.createView()
                        .source(userData)
                        .transform({
                            geoDataView: worldMap,
                            field: 'name',
                            type: 'geo.region',
                            as: [ 'longitude', 'latitude' ]
                        })
                        .transform({
                            type: 'map',
                            callback: obj => {
                                obj.trend = obj.value ;
                                return obj;
                            }
                        });
                    const userView = chart.view();
                    userView.source(userDv);
                    userView.polygon()
                        .position('longitude*latitude')
                        .color('trend', [ '#F51D27', '#0A61D7' ])
                        .opacity('value')
                        .tooltip('name*trend')
                        .animate({
                            leave: {
                                animation: 'fadeOut'
                            }
                        });
                    chart.render();
                }

            });

    },[])
    return (
        <div>
            <div ref={ref}>
            </div>
        </div>
    )
}
export default WorldGeo
