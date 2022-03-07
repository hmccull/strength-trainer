import React, { useEffect } from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid } from 'recharts';

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
        <BarChart width={800} height={300} data={data}>
          <XAxis dataKey="core_lift" stroke="#61dafb" />
          <YAxis />
          <Tooltip wrapperStyle={{ width: 200, backgroundColor: '#61dafb' }} />
          <CartesianGrid stroke="#ccc" />
          <Bar dataKey="one_rep_max" fill="#61dafb" barSize={30} />
        </BarChart>
      );

    return (
        <div id='rep-max-chart'>
            <h3>~1RM</h3>
            {renderBarChart}
        </div>
    )
}

export default OneRMChart;