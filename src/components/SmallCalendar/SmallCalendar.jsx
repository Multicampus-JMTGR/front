import React, { useState, useEffect } from "react";
import Calendar from "react-calendar";
import moment from "moment";
import "react-calendar/dist/Calendar.css";
import "./SmallCalendar.css";
import Popup from "reactjs-popup";

const mark = [
  { date: "11-11-2020", color: "#93fa16", desc: "This is desc1" },
  { date: "12-11-2020", color: "grey", desc: "This is desc2" },
  { date: "13-11-2020", color: "#16ebfa", desc: "This is desc3" },
  { date: "19-11-2020", color: "#fa1644", desc: "This is desc4" },
];
const SmallCalendar = ({ certData }) => {
  const [value, setValue] = useState(new Date());
  const [regStartDates, setRegStartDates] = useState([]);
  const [regEndDates, setRegEndDates] = useState([]);
  const [testStartDates, setTestStartDates] = useState([]);
  const [testEndDates, setTestEndDates] = useState([]);
  const [resultDates, setResultDates] = useState([]);
  const [dates, setDates] = useState([]);
  useEffect(() => {
    let rsd = [],
      red = [],
      tsd = [],
      ted = [],
      rd = [],
      ds = [];
    if (certData) {
      certData.cert_schedule.forEach((e) => {
        ds.push({
          cert_name: certData.name,
          type: "reg_start",
          d: e.reg_start_date,
        });
        ds.push({
          cert_name: certData.name,
          type: "reg_end",
          d: e.reg_end_date,
        });
        ds.push({
          cert_name: certData.name,
          type: "test_start",
          d: e.test_start_date,
        });
        ds.push({
          cert_name: certData.name,
          type: "test_end",
          d: e.test_end_date,
        });
        ds.push({
          cert_name: certData.name,
          type: "result",
          d: e.result_date_1,
        });
        ds.push({
          cert_name: certData.name,
          type: "result",
          d: e.resutl_date_2,
        });
        rsd.push(e.reg_start_date);
        red.push(e.reg_end_date);
        tsd.push(e.test_start_date);
        ted.push(e.test_end_date);
        rd.push(e.result_date_1);
        rd.push(e.result_date_2);
      });
      setRegStartDates(rsd);
      setRegEndDates(red);
      setTestStartDates(tsd);
      setTestEndDates(ted);
      setResultDates(rd);
      setDates(ds);
      console.log(ds);
    }
  }, []);

  const tileContent = ({ activeStartDate, date, view }) => {
    let event = [];
    // console.log(dates);
    dates.find((d) => {
      d.d == moment(date).format("YYYY-MM-DD") && event.push(d);
    });
    return event.length ? (
      <Popup
        contentStyle={{
          borderRadius: ".3rem",
          width: "auto",
        }}
        trigger={<div className={event[event.length - 1].type}>●</div>}
        position="top end"
        modal
      >
        <div>{certData.name}</div>
        {event.map((e) => (
          <div>{e.type}</div>
        ))}
      </Popup>
    ) : null;
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
      {/* <ul>
        {certData &&
          mark.map((e, i) => (
            <li key={i}>
              <span style={{ color: e.color }}>●</span> <span>{e.desc}</span>
            </li>
          ))}
      </ul> */}
    </div>
  );
};

export default SmallCalendar;
