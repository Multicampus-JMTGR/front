import React, { useState } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import { Popover } from "@material-ui/core";
import style from "react-big-calendar/lib/css/react-big-calendar.css";
import Popup from "reactjs-popup";
import moment from "moment";
const localizer = momentLocalizer(moment);
const ColoredDateCellWrapper = ({ children }) =>
  React.cloneElement(React.Children.only(children), {
    style: {
      backgroundColor: "#eae7dc",
    },
  });

const CustomPoppver = () => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handlePopoverOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  return (
    <Popover
      id="mouse-over-popover"
      open={open}
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "left",
      }}
      transformOrigin={{
        vertical: "top",
        horizontal: "left",
      }}
      onClose={handlePopoverClose}
      disableRestoreFocus
    >
      <span>I use Popover.</span>
    </Popover>
  );
};
const popUpDetail = ({ event }) => {
  return (
    <Popup
      contentStyle={{
        borderRadius: ".3rem",
      }}
      trigger={<div>{event.title}</div>}
      position="bottom center"
      modal
    >
      <div style={{ fontSize: "1.5rem", color: "#e85a4f" }}>{event.title}</div>
      <p style={{ color: "#e98074" }}>Start</p>
      <div>{event.start.toString()}</div>
      <p style={{ color: "#e98074" }}>End</p>
      <div>{event.end.toString()}</div>
    </Popup>
  );
};

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
    desc: "this is desc",
  };

  return (
    <div>
      <Calendar
        events={[e, e2]}
        eventPropGetter={(event) => ({
          style: {
            backgroundColor: event.id % 2 === 0 ? "#e85a4f" : "#8e8d8a",
          },
        })}
        // views={allViews}
        step={60}
        showMultiDayTimes
        defaultDate={moment().toDate()}
        components={{
          event: popUpDetail,
          //   timeSlotWrapper: ColoredDateCellWrapper,
        }}
        localizer={localizer}
        style={
          (style, { width: "80vw", height: "90vh", backgroundColor: "#eae7dc" })
        }
        popup={true}
      />
    </div>
  );
};

export default BigCalendar;
