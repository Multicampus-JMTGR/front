import React, { useState, useEffect } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import style from "react-big-calendar/lib/css/react-big-calendar.css";
import Popup from "reactjs-popup";
import moment from "moment";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import "./BigCalendar.css";
import fetcher from "utils/fetcher";
import useSWR from "swr";
import { PopUpLoading, CertDetail } from "components";
const localizer = momentLocalizer(moment);
const catName = {
  examinee: "필기 접수인원",
  examinee_sil: "실기 접수인원",
  pass_percent: "필기 합격률",
  pass_percent_sil: "실기 합격률",
  cost: "필기 접수비",
  cost_sil: "실기 접수비",
};
const unit = {
  examinee: " 명",
  examinee_sil: " 명",
  pass_percent: " %",
  pass_percent_sil: " %",
  cost: " 원",
  cost_sil: " 원",
};
const PopUpDetail = ({ event, classname }) => {
  return (
    <Popup
      contentStyle={{
        borderRadius: ".3rem",
        width: "30vw",
        padding: "4rem",
      }}
      trigger={
        <div className={classname}>{`${event.title} ${event.category}`}</div>
      }
      position="bottom center"
      modal
    >
      <div className="big-calendar-popup">
        <div className="big-calendar-popup-category">{`< ${event.category} >`}</div>
        <a href={`${event.link}`} target="_blank" rel="noreferrer">
          {event.title}
        </a>
        <div className="big-calendar-popup-department">{event.department}</div>
        <p style={{ color: "#e98074" }}>시작</p>
        <div>{moment(event.start).format("YYYY년 MM월 DD일")}</div>
        <p style={{ color: "#e98074" }}>마감</p>
        <div>{moment(event.end).format("YYYY년 MM월 DD일")}</div>
        {Object.keys(catName).map((key, index) => (
          <CertDetail
            key={`detail-category-${index}`}
            category={catName[key]}
            value={`${event[key]} ${unit[key]}`}
          />
        ))}
      </div>
    </Popup>
  );
};
const CustomToolbar = (toolbar) => {
  const goToDayView = () => {
    toolbar.onView("day");
  };
  const goToWeekView = () => {
    toolbar.onView("week");
  };
  const goToMonthView = () => {
    toolbar.onView("month");
  };
  const goToBack = () => {
    toolbar.date.setMonth(toolbar.date.getMonth() - 1);
    toolbar.onNavigate("prev");
  };

  const goToNext = () => {
    toolbar.date.setMonth(toolbar.date.getMonth() + 1);
    toolbar.onNavigate("next");
  };

  const goToCurrent = () => {
    const now = new Date();
    toolbar.date.setMonth(now.getMonth());
    toolbar.date.setYear(now.getFullYear());
    toolbar.onNavigate("current");
  };

  const label = () => {
    const date = moment(toolbar.date);
    return (
      <span className="month-year-label">
        <b>{date.format("MMMM")}</b>
        <span> {date.format("YYYY")}</span>
      </span>
    );
  };

  return (
    <div className="toolbar-container">
      <div className="back-next-icons">
        <ArrowBackIosIcon className="arrow-icons" onClick={goToBack} />
        <div className="label-today">
          <label className="label-date">{label()}</label>
          <span className="today-span" onClick={goToCurrent}>
            Go today
          </span>
        </div>
        <ArrowForwardIosIcon className="arrow-icons" onClick={goToNext} />
      </div>
      <div className="dmy-btns">
        <span className="rbc-btn-group">
          <span className="label-filter-off" onClick={goToMonthView}>
            Month
          </span>
          <span className="label-filter-off" onClick={goToDayView}>
            Day
          </span>
          <span className="label-filter-off" onClick={goToWeekView}>
            Week
          </span>
        </span>
      </div>
    </div>
  );
};
const BigCalendar = () => {
  //   const [curYear, setCurYear] = useState(new Date().getYear());
  const [curMonth, setCurMonth] = useState(new Date().getMonth());
  const [tests, setTests] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isShowMore, setIsShowMore] = useState(false);
  const [showMoreEvents, setShowMoreEvents] = useState([]);
  const { data: scheduleData } = useSWR(
    `/api/certschedule/?month=${curMonth}`,
    fetcher
  );
  const ShowMore = ({ data }) => {
    console.log(data[0]);
    return (
      <div className="show-more-container">
        <span onClick={() => setIsShowMore(false)}>Go back</span>
        <div className="show-more">
          {data.map((e, i) => (
            <>
              <PopUpDetail event={e} classname="show-more-div" />
            </>
          ))}
        </div>
      </div>
    );
  };

  const makeDateObject = (date) => {
    let year = date[0];
    let month = date[1];
    let day = parseInt(date[2]) + 1;
    return new Date(year, month, day);
  };

  useEffect(() => {
    if (!scheduleData) {
      setIsLoading(true);
    } else {
      let regList = scheduleData?.map((e) => ({
        ...e,
        id: parseInt(e.cert_id),
        title: e.name,
        start: makeDateObject(e.reg_start_date.split("-")),
        end: makeDateObject(e.reg_end_date.split("-")),
        category: "접수",
        color: "#e8944f",
        allday: true,
      }));
      let testList = scheduleData?.map((e) => ({
        ...e,
        id: parseInt(e.cert_id),
        title: e.name,
        start: makeDateObject(e.test_start_date.split("-")),
        end: makeDateObject(e.test_end_date.split("-")),
        category: "시험",
        color: "#e85a4f",
        allday: true,
      }));
      let resultList = scheduleData?.map((e) => ({
        ...e,
        id: parseInt(e.cert_id),
        title: e.name,
        start: makeDateObject(e.result_date_1.split("-")),
        end: makeDateObject(e.result_date_1.split("-")),
        category: "결과발표",
        color: "#d8c3a5",
        allday: true,
      }));
      let allLists = regList.concat(testList, resultList);
      setTests(allLists);
      setIsLoading(false);
    }
    console.log(tests);
  }, [scheduleData]);

  if (isShowMore) return <ShowMore data={showMoreEvents} />;
  return (
    <div>
      {!isLoading ? (
        <Calendar
          events={tests}
          eventPropGetter={(event) => ({
            style: {
              backgroundColor: event.color,
            },
          })}
          // views={allViews}
          step={60}
          showMultiDayTimes
          defaultDate={moment().toDate()}
          components={{
            event: PopUpDetail,
            toolbar: CustomToolbar,
          }}
          localizer={localizer}
          style={
            (style,
            { width: "100%", height: "90vh", backgroundColor: "#eae7dc" })
          }
          onShowMore={(e) => {
            setIsShowMore(true);
            setShowMoreEvents(e);
          }}
        />
      ) : (
        <PopUpLoading isLoading={true} />
      )}
    </div>
  );
};

export default BigCalendar;
