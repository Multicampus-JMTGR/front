import CertificateDetail from "../CertificateDetail/CertificateDetail";
import React, { useState, useEffect } from "react";
import { IconButton, makeStyles } from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import "./PopularCertificate.css";

const useStyles = makeStyles((theme) => ({
  showAll: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.standard,
    }),
  },
  showRolling: {
    transform: "rotate(180deg)",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.standard,
    }),
  },
}));

const PopularCertificate = ({ popularCertificates, title, engTitle }) => {
  const classes = useStyles();
  const [showAll, setShowAll] = useState(false);
  //   const [timer, setTimer] = useState(null);
  //   const [count, setCount] = useState(null);
  const bannerCount = popularCertificates?.length;
  let timer;
  let cnt = 0;
  useEffect(() => {
    if (showAll === false) {
      modifyStyles(cnt); // for initial state
      timer = setInterval(() => {
        cnt++;
        if (cnt === bannerCount) {
          cnt = 0;
        }
        modifyStyles(cnt);
      }, 2000);
      //   setTimer(timer);
      return () => {
        clearInterval(timer);
      };
    } else {
      clearInterval(timer);
    }
  });
  const modifyStyles = (cnt) => {
    let cur = document.getElementById(`${engTitle}-${cnt}`);
    let prev =
      cnt === 0
        ? document.getElementById(`${engTitle}-${bannerCount - 1}`)
        : document.getElementById(`${engTitle}-${cnt - 1}`);
    let next =
      cnt === bannerCount - 1
        ? document.getElementById(`${engTitle}-0`)
        : document.getElementById(`${engTitle}-${cnt + 1}`);
    if (cur && prev && next) {
      cur.style.top = "0%";
      cur.style.transition = "top 1s ease-in-out";
      prev.style.top = "-150%";
      next.style.top = "100%";
      next.style.transition = "none";
    }
  };
  const onClick = () => {
    setShowAll(!showAll);
  };
  return (
    <div className="pop-cert-container">
      <span className="pop-cert-title">{title}</span>
      <div className="pop-cert-roller">
        <ul className={showAll ? "unRollingUl" : "rollingUl"}>
          {popularCertificates?.map((popularCertificate, index) => (
            <CertificateDetail
              certificateData={popularCertificate}
              index={index}
              showAll={showAll}
              engTitle={engTitle}
              key={index}
            />
          ))}
        </ul>
        <IconButton
          onClick={onClick}
          className={!showAll ? classes.showAll : classes.showRolling}
        >
          <ExpandMoreIcon style={{ color: "white" }} fontSize="large" />
        </IconButton>
      </div>
    </div>
  );
};
export default PopularCertificate;
