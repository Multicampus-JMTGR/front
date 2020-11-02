import React from 'react';

import { BigCalendar } from '../components';

const Calendar = ({history}) => {
    return(
        <>
        {/* History */ /* This is button, 'Link' is a tag */}
        <p><button onClick={()=>history.push('/')}>go back to home</button></p> 
        <BigCalendar />
        </>
    )
}

export default Calendar;