import React from 'react';

import Moment from 'moment';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

function CaloriesChart({ workouts }) {

    let data = [];

    for (let i = 0; i < workouts.length; i++) {
        let date = workouts[i].date
        let formattedDate = Moment(date).format('MM/DD')
        let active_calories = workouts[i].active_calories
        data.push({active_calories: active_calories, date: formattedDate})
    }
    console.log(data)

    const renderLineChart = (
    <ResponsiveContainer aspect={5}>
        <LineChart data={data}>
            <Line type="monotone" dataKey="active_calories" stroke="#61dafb" />
            <CartesianGrid stroke="#ccc" />
            <XAxis dataKey="date" />
            <YAxis dataKey='active_calories' domain={[0, 500]} />
            <Tooltip />
        </LineChart>
    </ResponsiveContainer>
    );

    return (
        <div id="calories-chart">
            <h3 className='chart-titles'>Calories Burned</h3>
            {renderLineChart}
        </div>
    )
}

export default CaloriesChart;