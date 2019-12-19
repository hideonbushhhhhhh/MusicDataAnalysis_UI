
import React, {useEffect} from 'react';
import G2 from '@antv/g2';
import ReactDOM from "react-dom";
const DataSet = require( '@antv/data-set')
function Bar () {
    let data=[
        { year: 1970, count: 377 },
        { year: 1971, count: 145 },
        { year: 1972, count: 164 },
        { year: 1973, count: 203 },
        { year: 1974, count: 202 },
        { year: 1975, count: 213 },
        { year: 1976, count: 247 },
        { year: 1977, count: 242 },
        { year: 1978, count: 310 },
        { year: 1979, count: 318 },
        { year: 1980, count: 420 },
        { year: 1981, count: 336 },
        { year: 1982, count: 337 },
        { year: 1983, count: 439 },
        { year: 1984, count: 457 },
        { year: 1985, count: 524 },
        { year: 1986, count: 624 },
        { year: 1987, count: 744 },
        { year: 1988, count: 858 },
        { year: 1989, count: 914 },
        { year: 1990, count: 1203 },
        { year: 1991, count: 1279 },
        { year: 1992, count: 1351 },
        { year: 1993, count: 1804 },
        { year: 1994, count: 1906 },
        { year: 1995, count: 2102 },
        { year: 1996, count: 2142 },
        { year: 1997, count: 2407 },
        { year: 1998, count: 2431 },
        { year: 1999, count: 2753 },
        { year: 2000, count: 4039 },
        { year: 2001, count: 3304 },
        { year: 2002, count: 3573 },
        { year: 2003, count: 4381 },
        { year: 2004, count: 4905 },
        { year: 2005, count: 5750 },
        { year: 2006, count: 7151 },
        { year: 2007, count: 8395 },
        { year: 2008, count: 9949 },
        { year: 2009, count: 11894 },
        { year: 2010, count: 13580 },
        { year: 2011, count: 16937 },
        { year: 2012, count: 19078 },
        { year: 2013, count: 28574 },
        { year: 2014, count: 29512 },
        { year: 2015, count: 32022 },
        { year: 2016, count: 35866 },
        { year: 2017, count: 48114 },
        { year: 2018, count: 53164 },
        { year: 2019, count: 42685 },
    ];
    const ref = React.useRef(null);
    useEffect(() => {
        // axios.get('http://localhost:8080/getPerYearSongCount').then(function (req) {
        //   data=req.data;
        // })
        const ds = new DataSet();
        const dv1 = ds.createView().source(data);
        dv1.transform({
            type: 'map',

            callback: function callback(row) {
                if (typeof (row.count) === 'string') {
                    row.count = row.count.replace(',', '');
                }
                row.count = parseInt(row.count);
                row.Count = row.count;
                row.Year = row.year;
                return row;
            }
        });
        const dv2 = ds.createView().source(dv1.rows);
        dv2.transform({
            type: 'regression',
            method: 'polynomial',
            fields: [ 'Year', 'Count' ],
            bandwidth: 0.1,
            as: [ 'year', 'count' ]

        });
        const chart = new G2.Chart({
            container: ReactDOM.findDOMNode(ref.current),
            forceFit: true,
            width: 1000,
            height: 500,

            padding: [ 20, 20, 50, 50 ]
        });
        chart.tooltip({
            crosshairs: false
        });
        const view1 = chart.view();
        view1.source(dv1);
        view1.axis('year', {
            subTickCount: 3,
            subTickLine: {
                length: 3,
                stroke: '#bfbfbf',
                lineWidth: 1
            },
            tickLine: {
                length: 6,
                lineWidth: 1,
                stroke: '#bfbfbf'
            },
            label: {
                textStyle: {
                    fill: '#aaaaaa'
                }
            }
        });
        view1.axis('count', {
            label: {
                textStyle: {
                    fill: '#aaaaaa'
                },
                formatter: text => {
                    return text.replace(/(\d)(?=(?:\d{3})+$)/g, '$1,');
                }
            }
        });
        view1.line().position('Year*Count');
        const view2 = chart.view();
        view2.axis(false);
        view2.source(dv2);
        view2.line().position('year*count').style({
            stroke: '#969696',
            lineDash: [ 3, 3 ]
        })
            .tooltip(false);
        // add guide
        view1.guide().text({
            content: '趋势线',
            position: [ '1970', 2500 ],
            style: {
                fill: '#8c8c8c',
                fontSize: 14,
                fontWeight: 300
            },
            offsetY: -70
        });
        chart.render();
    }, []);
    return (
        <div>
            <div ref={ref}></div>
        </div>
    );
}

export default Bar
