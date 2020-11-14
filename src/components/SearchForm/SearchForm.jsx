import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Paper,
  InputBase,
  IconButton,
  CircularProgress,
} from "@material-ui/core";
import { SearchLogs } from "components";
import useSWR from "swr";
import fetcher from "utils/fetcher";
import SearchIcon from "@material-ui/icons/Search";
import "./SearchForm.css";

const SearchForm = () => {
  const [isInitial, setIsInitial] = useState(true);
  const [showLogs, setShowLogs] = useState(false);
  const [searchCertification, setSearchCertification] = useState("");

  const { data: queryData } = useSWR(
    `/api/certificate/filter/?keyword=${searchCertification}`,
    fetcher
  );

  const onChange = (event) => {
    setIsInitial(false);
    const {
      target: { value },
    } = event;
    if (value === "") setIsInitial(true);
    setSearchCertification(value.toLowerCase());
  };

  const onSubmit = (event) => {
    event.preventDefault();
    // console.log(searchCertification);
  };
  const onFocus = (e) => {
    isInitial ? setShowLogs(true) : setShowLogs(false);
  };
  const onBlur = (e) => {
    setTimeout(() => {
      setShowLogs(false);
    }, 100);
  };
  const onClickCert = (event) => {
    const {
      target: { id, textContent },
    } = event;
    /** set log to session storage */
    let logs = sessionStorage.getItem("search-log");
    if (logs) {
      sessionStorage.removeItem("search-log");
      let jsonLogs = JSON.parse(logs);
      if (!jsonLogs.log.find((e) => e.certId === id)) {
        jsonLogs.log.push({ name: textContent, certId: id });
      }
      sessionStorage.setItem("search-log", JSON.stringify(jsonLogs));
    } else {
      sessionStorage.setItem(
        "search-log",
        JSON.stringify({
          log: [{ name: textContent, certId: id }],
        })
      );
    }
  };
  return (
    <div className="searchform-container">
      <Paper component="form" onSubmit={onSubmit} className="searchform-paper">
        <IconButton type="submit" aria-label="search">
          <SearchIcon />
        </IconButton>
        <InputBase
          placeholder="  Search.."
          type="text"
          value={searchCertification}
          onChange={onChange}
          onFocus={onFocus}
          onBlur={onBlur}
        />
      </Paper>
      {!isInitial ? (
        <ul>
          {queryData ? (
            queryData.length ? (
              queryData.map((qd, index) => (
                <li key={`search-${index}`}>
                  <Link
                    style={{ fontSize: "1.2rem", margin: ".2rem" }}
                    to={`/detail/${qd.cert_id}`}
                    id={qd.cert_id}
                    onClick={onClickCert}
                  >
                    {qd.name}
                  </Link>
                </li>
              ))
            ) : (
              <li>No result</li>
            )
          ) : (
            <CircularProgress color="secondary" />
          )}
        </ul>
      ) : (
        showLogs && <SearchLogs />
      )}
    </div>
  );
};

export default SearchForm;
