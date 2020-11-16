import React, { useState, useEffect } from "react";
import Calendar from "react-calendar";
import moment from "moment";
import "react-calendar/dist/Calendar.css";
import "./SmallCalendar.css";
import Popup from "reactjs-popup";
import axios from "axios";
import {
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
  FormLabel,
} from "@material-ui/core";
import useSWR from "swr";
import fetcher from "utils/fetcher";
const bulletColor = {
  reg_start: "#07fc03",
  test_start: "#07fc03",
  reg_end: "#fcba03",
  test_end: "#fcba03",
  result: "#e85a4f",
};
const eventType = {
  reg_start: "접수 시작",
  test_start: "시험날",
  reg_end: "접수 마감",
  test_end: "시험날",
  result: "결과 발표",
};

const SmallCalendar = ({ myLikeData }) => {
  const [value, setValue] = useState(new Date());
  const [dates, setDates] = useState([]);
  const [curCertId, setCurCertId] = useState(-1);
  const { data: certData } = useSWR(
    `/api/mypage-certschedule/${curCertId}`,
    fetcher
  );
  useEffect(() => {
    let ds = [];

    if (certData) {
      //   console.log("useE :", curCertId);
      //   console.log("mylike :", myLikeData);
      let curData = myLikeData?.find(
        (e) => parseInt(e.cert_id) === parseInt(curCertId)
      );
      //   console.log(curData);
      certData?.forEach((e) => {
        ds.push({
          title: curData?.name,
          test_type: e.test_type,
          type: "reg_start",
          d: e.reg_start_date,
        });
        ds.push({
          title: curData?.name,
          test_type: e.test_type,
          type: "reg_end",
          d: e.reg_end_date,
        });
        ds.push({
          title: curData?.name,
          test_type: e.test_type,
          type: "test_start",
          d: e.test_start_date,
        });
        ds.push({
          title: curData?.name,
          test_type: e.test_type,
          type: "test_end",
          d: e.test_end_date,
        });
        ds.push({
          title: curData?.name,
          test_type: e.test_type,
          type: "result",
          d: e.result_date_1,
        });
        ds.push({
          title: curData?.name,
          test_type: e.test_type,
          type: "result",
          d: e.resutl_date_2,
        });
      });
      //   console.log(ds);
      setDates(ds);
    }
  }, [certData, curCertId]);
  const TileContent = ({ activeStartDate, date, view }) => {
    let event = dates.find((d) => d.d == moment(date).format("YYYY-MM-DD"));
    return event ? (
      <Popup
        contentStyle={{
          borderRadius: ".3rem",
          width: "auto",
        }}
        trigger={<div style={{ color: bulletColor[event.type] }}>●</div>}
        position="top end"
        modal
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            margin: ".5rem 1rem",
          }}
        >
          <div style={{ fontSize: "2rem" }}>
            {moment(date).format("YYYY/ MM / DD")}
          </div>
          <div style={{ fontSize: "1.2rem" }}>
            <span>{event.title}</span>{" "}
            <span style={{ color: "#e85a4f" }}>
              {event.test_type} {eventType[event.type]}
            </span>
          </div>
          <div>
            {/* <div style={{ marginTop: "1rem" }}>
              주관 : {event.cert_info.department}
            </div> */}
            {/* {event.test_type === "필기" ? (
              <>
                <div>필기 접수 가격 : {event.cert_info.cost} 원</div>
                <div>필기 합격률 : {event.cert_info.pass_percent}%</div>
              </>
            ) : (
              <>
                <div>실기 접수 가격 : {event.cert_info.cost_sil} 원</div>
                <div>실기 합격률 : {event.cert_info.pass_percent_sil}%</div>
              </>
            )} */}
          </div>
        </div>
      </Popup>
    ) : null;
  };
  const onClickCheck = (e) => {
    const {
      target: { value },
    } = e;
    setCurCertId(value);
    // let cd = myData.cert_likes.find((e) => e.cert_id == value);
    // setCertData(cd);
  };
  return (
    <div className="small-calendar-container">
      <Calendar
        className="small-calendar"
        value={value}
        calendarType={"US"}
        tileContent={TileContent}
      />
      {myLikeData ? (
        <div style={{ marginTop: "3vh" }}>
          <FormControl component="fieldset">
            <FormLabel
              component="legend"
              style={{
                color: "#e85a4f",
                fontSize: "1.2rem",
                margin: "2vh",
                fontWeight: "bold",
                
              }}
            >
              달력에 일정을 표시할 자격증 선택
            </FormLabel>
            <RadioGroup aria-label="cert" value={value} onChange={onClickCheck}>
              {myLikeData.map((e, i) => (
                <FormControlLabel
                  key={`likes-${i}`}
                  control={
                    <Radio
                      checked={e.cert_id == curCertId ? true : false}
                      style={{ color: "#e98074", marginBottom: "1vh" }}
                    />
                  }
                  label={e.name}
                  value={e.cert_id}
                  style={{
                    color: "#8e8d8a",
                    fontWeight: "bold",
                    margin: "-1vh",
                  }}
                />
              ))}
            </RadioGroup>
          </FormControl>
        </div>
      ) : null}
    </div>
  );
};

export default SmallCalendar;
