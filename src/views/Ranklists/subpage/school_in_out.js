import { Chart, Tooltip, Sector, Coord } from 'viser-react';
import * as React from 'react';

const data = [
    { year: '国外大学', population: 217 },
    { year: '国内大学', population: 758 }
];

export default class App extends React.Component {
    render() {
        return (
            <Chart forceFit height={400} data={data}>
                <Tooltip />
                <Coord type="polar" />
                <Sector
                    position="year*population"
                    style={{ stroke: '#fff', lineWidth: 1 }}
                    label={['year', {
                        offset: -15,
                    }]}
                />
            </Chart>
        );
    }
}