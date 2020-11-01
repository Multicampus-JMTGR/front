import React from "react";
import { Calendar, Views, momentLocalizer } from "react-big-calendar";
import style from "react-big-calendar/lib/css/react-big-calendar.css";
import moment from "moment";

const localizer = momentLocalizer(moment);
let allViews = Object.keys(Views).map((k) => Views[k]);
const ColoredDateCellWrapper = ({ children }) =>
  React.cloneElement(React.Children.only(children), {
    style: {
      backgroundColor: "lightblue",
    },
  });

const BigCalendar = () => {
  let e = {
    id: 1,
    title: "test",
    start: new Date(2020, 10 - 1, 31),
    end: new Date(2020, 11 - 1, 3), // month should -1.
    allDay: true,
    resource: "test",
    desc: "this is desc",
  };
  let e2 = {
    id: 2,
    title: "Good good",
    start: new Date(2020, 11 - 1, 3),
    end: new Date(2020, 11 - 1, 13), // month should -1.
    allDay: true,
    resource: "Have a good days",
  };

  let defaultDate = new Date(moment().format('YYYY,MM,DD'));
  return (
    <div>
      <Calendar
        events={[e, e2]}
        eventPropGetter={(event) => ({style:{
            backgroundColor: event.id % 2 === 0 ? 'red' : 'blue',
        }})}
        views={allViews}
        step={60}
        showMultiDayTimes
        defaultDate={defaultDate}
        components={{
          timeSlotWrapper: ColoredDateCellWrapper,
        }}
        localizer={localizer}
        style={(style, { height: "90vh" })}
      />
    </div>
  );
};

export default BigCalendar;
