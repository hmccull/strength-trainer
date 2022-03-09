import React from 'react';

import Moment from 'moment';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

function BodyWeightChart({ workouts }) {

    let data = [];

    for (let i = 0; i < workouts.length; i++) {
        let date = workouts[i].date
        let formattedDate = Moment(date).format('MM/DD')
        let body_weight = workouts[i].body_weight
        data.push({body_weight: body_weight, date: formattedDate})
    }

    const renderLineChart = (
    <ResponsiveContainer aspect={5}>
    <LineChart data={data}>
        <Line type="monotone" dataKey="body_weight" stroke="#61dafb" />
        <CartesianGrid stroke="#ccc" />
        <XAxis dataKey="date" />
        <YAxis dataKey='body_weight' domain={[50, 175]} />
        <Tooltip />
    </LineChart>
    </ResponsiveContainer>
    );

    return (
        <div id="body-weight-chart">
            <h3 className='chart-titles'>Body Weight</h3>
            {renderLineChart}
        </div>
    )
}

export default BodyWeightChart;