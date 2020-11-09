import React, { useState } from "react";
import Calendar from "react-calendar";
import moment from "moment";
import "react-calendar/dist/Calendar.css";
import "./SmallCalendar.css";
const mark = [
  { date: "11-11-2020", color: "#93fa16", desc: "This is desc1" },
  { date: "12-11-2020", color: "grey", desc: "This is desc2" },
  { date: "13-11-2020", color: "#16ebfa", desc: "This is desc3" },
  { date: "19-11-2020", color: "#fa1644", desc: "This is desc4" },
];
const SmallCalendar = () => {
  const [value, setValue] = useState(new Date());

  const tileContent = ({ activeStartDate, date, view }) => {
    let event = mark.find((m) => m.date === moment(date).format("DD-MM-YYYY"));
    return event ? <div style={{ color: event.color }}>●</div> : null;
  };
  return (
    <div className="small-calendar-container">
      <Calendar
        className="small-calendar"
        value={value}
        calendarType={"US"}
        tileClassName={({ date }) => {
          if (mark.find((m) => m.date === moment(date).format("DD-MM-YYYY"))) {
            return "highlight";
          }
        }}
        tileContent={tileContent}
      />
      <ul>
        {mark.map((e, i) => (
          <li key={i}>
            <span style={{ color: e.color }}>●</span> <span>{e.desc}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SmallCalendar;
