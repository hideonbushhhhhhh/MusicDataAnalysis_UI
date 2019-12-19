import React, {useEffect} from 'react';
import G2 from '@antv/g2';
import ReactDOM from "react-dom";
const DataSet = require( '@antv/data-set')
function Bar () {
  let data = [{"year":1970,"count":3813},{"year":1971,"count":2025},{"year":1972,"count":2269},{"year":1973,"count":2757},{"year":1974,"count":2700},{"year":1975,"count":2999},{"year":1976,"count":3529},{"year":1977,"count":3352},{"year":1978,"count":4289},{"year":1979,"count":5061},{"year":1980,"count":5306},{"year":1981,"count":4339},{"year":1982,"count":4653},{"year":1983,"count":5630},{"year":1984,"count":6124},{"year":1985,"count":6908},{"year":1986,"count":8451},{"year":1987,"count":10644},{"year":1988,"count":11904},{"year":1989,"count":13081},{"year":1990,"count":16022},{"year":1991,"count":19212},{"year":1992,"count":20808},{"year":1993,"count":26082},{"year":1994,"count":28574},{"year":1995,"count":30312},{"year":1996,"count":32421},{"year":1997,"count":34397},{"year":1998,"count":35566},{"year":1999,"count":50034},{"year":2000,"count":55863},{"year":2001,"count":50588},{"year":2002,"count":55358},{"year":2003,"count":63504},{"year":2004,"count":67932},{"year":2005,"count":77817},{"year":2006,"count":96681},{"year":2007,"count":112286},{"year":2008,"count":126260},{"year":2009,"count":143928},{"year":2010,"count":157159},{"year":2011,"count":191929},{"year":2012,"count":207076},{"year":2013,"count":285886},{"year":2014,"count":289386},{"year":2015,"count":233285},{"year":2016,"count":209819},{"year":2017,"count":312063},{"year":2018,"count":300223},{"year":2019,"count":241904}]
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
