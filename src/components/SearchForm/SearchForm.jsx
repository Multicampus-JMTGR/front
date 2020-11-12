import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  Paper,
  InputBase,
  IconButton,
  CircularProgress,
} from "@material-ui/core";
import useSWR from "swr";
import fetcher from "utils/fetcher";
import SearchIcon from "@material-ui/icons/Search";
import "./SearchForm.css";

const SearchForm = () => {
  const [isInitial, setIsInitial] = useState(true);
  const [searchCertification, setSearchCertification] = useState("");
  const [certificateResults, setCertificateResults] = useState([]);
  const { data: queryData } = useSWR(
    `api/certificate/CertificatesFilter/?keyword=${searchCertification}`,
    fetcher
  );
  useEffect(() => {
    if (searchCertification === "") {
      setIsInitial(true);
    }
    // } else {
    //   setCertificateResults(queryData);
    //   console.log(certificateResults);
    // }
  }, []);
  const onChange = (event) => {
    setIsInitial(false);
    const {
      target: { value },
    } = event;
    setSearchCertification(value.toLowerCase());
  };

  const onSubmit = (event) => {
    event.preventDefault();
    // console.log(searchCertification);
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
        />
      </Paper>
      {!isInitial && (
        <ul>
          {queryData ? (
            queryData.length ? (
              queryData.map((qd, index) => (
                <li key={index}>
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
      )}
    </div>
  );
};

export default SearchForm;
