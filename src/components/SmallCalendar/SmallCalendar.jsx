import React, { useState } from "react";
import Calendar from "react-calendar";
import moment from "moment";
import "react-calendar/dist/Calendar.css";
import "./SmallCalendar.css";
const mark = [
  { id: 1, date: "11-11-2020", color: "#93fa16", desc: "This is desc1" },
  { id: 2, date: "12-11-2020", color: "grey", desc: "This is desc2" },
  { id: 3, date: "13-11-2020", color: "#16ebfa", desc: "This is desc3" },
  { id: 4, date: "19-11-2020", color: "#fa1644", desc: "This is desc4" },
];
const SmallCalendar = () => {
  const [value, setValue] = useState(new Date());

  const tileContent = ({ activeStartDate, date, view }) => {
    let event = mark.find((m) => m.date === moment(date).format("DD-MM-YYYY"));
    return event ? (
      // fontSize: "2.5rem", margin: "-1rem",
      <div style={{ color: event.color }}>●</div>
    ) : null;
  };
  return (
    <div className="small-calendar-container">
      <Calendar
        className="small-calendar"
        value={value}
        tileClassName={({ date }) => {
          if (mark.find((m) => m.date === moment(date).format("DD-MM-YYYY"))) {
            return "highlight";
          }
        }}
        tileContent={tileContent}
      />
      <ul>
        {mark.map((e) => (
          <>
            <li key={e.id}>
              <span style={{ color: e.color }}>●</span> <span>{e.desc}</span>
            </li>
          </>
        ))}
      </ul>
    </div>
  );
};

export default SmallCalendar;
