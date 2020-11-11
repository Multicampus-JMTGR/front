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
  const [count, setCount] = useState(0);
  //   const [timer, setTimer] = useState(0);
  const bannerCount = popularCertificates?.length;
  let timer;
  useEffect(() => {
    if (showAll === false) {
      modifyStyles(count); // for initial state
      timer = setInterval(() => {
        let nextCount = count + 1;
        if (nextCount === bannerCount) {
          nextCount = 0;
        }
        setCount(nextCount);
        // modifyStyles(nextCount);
        modifyStyles();
      }, 2500);
      //   setTimer(timer);
      return () => {
        clearInterval(timer);
        // setTimer(null);
      };
    } else {
      clearInterval(timer);
      //   setTimer(null);
    }
  });
  const modifyStyles = () => {
    let cur = document.getElementById(`${engTitle}-${count}`);
    let prev =
      count === 0
        ? document.getElementById(`${engTitle}-${bannerCount - 1}`)
        : document.getElementById(`${engTitle}-${count - 1}`);
    let next =
      count === bannerCount - 1
        ? document.getElementById(`${engTitle}-0`)
        : document.getElementById(`${engTitle}-${count + 1}`);
    if (cur && prev && next) {
      cur.style.top = "0%";
      cur.style.transition = "top 1s ease-in-out";
      prev.style.top = "-150%";
      next.style.top = "150%";
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
