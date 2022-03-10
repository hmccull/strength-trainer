import React, { useState } from 'react';

import Moment from 'moment';
import HeatMap from '@uiw/react-heat-map';
import Tooltip from '@uiw/react-tooltip';

function WorkoutCalendar({ workouts }) {

    let data = [];

    for (let i = 0; i < workouts.length; i++) {
        let date = workouts[i].date
        let formattedDate = Moment(date).format('YYYY/MM/DD')
        data.push({date: formattedDate, count: 1})
    }

    let weeks = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
    let months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
    let color = {0: '#282c34'}

    const renderLineChart = (
        <>
            <HeatMap 
                value={data} 
                space={5}
                dark={true}
                startDate={new Date('2022/01/01')} 
                endDate='2022/12/31'
                legendCellSize={0}
                width={1200}
                height={200}
                panelColors={{1: '#61dafb'}}
                weekLabels={weeks}
                monthLabels={months}
                rectSize={20}
            />
        </>
    );

    return (
        <div id="workout-chart">
            <h3 className='chart-titles'>Workouts Completed</h3>
            {renderLineChart}
        </div>
    )
}

export default WorkoutCalendar;