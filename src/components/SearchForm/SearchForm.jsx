import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Loading } from "../../components";
import { Paper, InputBase, IconButton } from "@material-ui/core";
import useSWR from "swr";
import fetcher from "../../utils/fetcher";
import SearchIcon from "@material-ui/icons/Search";
import data from "../../data/testData.json";
import "./SearchForm.css";

var testSet = data.testSet;

const SearchForm = () => {
  const [isInitial, setIsInitial] = useState(true);
  const [searchCertification, setSearchCertification] = useState("");
  const [certificateResults, setCertificateResults] = useState([]);
  const { data: queryData } = useSWR(
    `api/certificate/CertificatesFilter/?keyword=${searchCertification}`,
    fetcher
  );
  const onChange = (event) => {
    setIsInitial(false);
    const {
      target: { value },
    } = event;
    setSearchCertification(value.toLowerCase());
  };
  useEffect(() => {
    setCertificateResults(queryData);
    // if (searchCertification !== "") {
    //   const results = testSet.filter((test) =>
    //     test.title.toLowerCase().includes(searchCertification)
    //   );
    //   setIsInitial(false);
    //   setCertificateResults(results);
    // }
    // else if (setSearchCertification === "" && !isInitial) {
    //     console.log('here')
    //   setCertificateResults([]);
    // }
  }, [searchCertification]);

  const onSubmit = (event) => {
    event.preventDefault();
    // console.log(searchCertification);
  };
  //   const onClickCetification = (event) => {
  //     const {
  //       target: { textContent },
  //     } = event;
  //     // data.testSet.forEach((test) => {
  //     //   if (test.title === textContent) test.isLike = !test.isLike;
  //     // });
  //     <Redirect to={`/detail/${textContent}`} />;
  //   };
  return (
    <div className="searchform-container">
      <Paper component="form" onSubmit={onSubmit} className="searchform-paper">
        <IconButton type="submit" aria-label="search">
          <SearchIcon />
        </IconButton>
        <InputBase
          placeholder="Search.."
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
                  >
                    {qd.name}
                  </Link>
                </li>
              ))
            ) : (
              <li>No result</li>
            )
          ) : (
            <Loading />
          )}
        </ul>
      )}
    </div>
  );
};

export default SearchForm;
