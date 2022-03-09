import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer } from 'recharts';

import Moment from 'moment';

function OneRMChart({ workouts }) {

    let data = [];

    for (let i = 0; i < workouts.length; i++) {
        let date = workouts[i].date
        let formattedDate = Moment(date).format('MM/DD')
        let one_rep_max = workouts[i].one_rep_max
        let core_lift = workouts[i].cores[0].name
        data.push({one_rep_max: one_rep_max, date: formattedDate, core_lift: core_lift})
    }

    const renderBarChart = (
        <ResponsiveContainer aspect={4}>
            <BarChart data={data}>
                <XAxis dataKey="core_lift" stroke="#61dafb" />
                <YAxis type='number' domain={[45, 275]} />
                <Tooltip wrapperStyle={{ width: 200 }} />
                <CartesianGrid stroke="#ccc" />
                <Bar dataKey="one_rep_max" fill="#61dafb" barSize={30} />
            </BarChart>
        </ResponsiveContainer>
      );

    return (
        <div id='rep-max-chart'>
            <h3 className='chart-titles'>~ One-Rep Max</h3>
            {renderBarChart}
        </div>
    )
}

export default OneRMChart;