import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import moment from "moment";
import "./SmallCalendar.css";
const mark = ["11-11-2020", "12-11-2020", "13-11-2020"];
const SmallCalendar = () => {
  const [value, setValue] = useState(new Date());

  const onChange = (nextValue) => {
    setValue(nextValue);
    console.log(nextValue);
  };

  return (
    <Calendar
      className="small-calendar"
      onChange={onChange}
      value={value}
      tileClassName={(date, view) => {
        if (mark.find((m) => m === moment(date).format("DD-MM-YYYY")))
          console.log('hi')
      }}
      //   tileDisabled={({ date }) => date.getDay() === 0}
      //   minDate={new Date()}
    />
  );
};

export default SmallCalendar;
