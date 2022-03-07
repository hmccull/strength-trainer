import React, { useEffect } from 'react';

import Moment from 'moment';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';

function BodyWeightChart({ workouts }) {

    let data = [];

    for (let i = 0; i < workouts.length; i++) {
        let date = workouts[i].date
        let formattedDate = Moment(date).format('MM/DD')
        let body_weight = workouts[i].body_weight
        data.push({body_weight: body_weight, date: formattedDate})
    }

    const renderLineChart = (
    <LineChart width={800} height={300} data={data}>
        <Line type="monotone" dataKey="body_weight" stroke="#61dafb" />
        <CartesianGrid stroke="#ccc" />
        <XAxis dataKey="date" />
        <YAxis dataKey='body_weight' />
        <Tooltip />
    </LineChart>
    );

    return (
        <div id="body-weight-chart">
            <h3>Body Weight</h3>
            {renderLineChart}
        </div>
    )
}

export default BodyWeightChart;