import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "./SmallCalendar.css";
const SmallCalendar = () => {
  const [value, setValue] = useState(new Date());

  const onChange = (nextValue) => {
    setValue(nextValue);
    console.log(nextValue);
  };

  return (
    <Calendar className="small-calendar" onChange={onChange} value={value} />
  );
};

export default SmallCalendar;
