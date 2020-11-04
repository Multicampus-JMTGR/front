import React, { useState, useEffect } from "react";
import "../../css/SearchForm.css";
import { Paper, InputBase, IconButton } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import data from "../../data/testData.json";
var testSet = data.testSet;

const SearchForm = () => {
  const [seachCertification, setSearchCertification] = useState("");
  const [certificationResults, setCertificationResults] = useState([]);
  const onChange = (event) => {
    const {
      target: { value },
    } = event;
    setSearchCertification(value.toLowerCase());
    // console.log(seachCertification);
  };
  useEffect(() => {
    const results = testSet.filter((test) =>
      test.title.toLowerCase().includes(seachCertification)
    );
    setCertificationResults(results);
  }, [seachCertification]);

  const onSubmit = (event) => {
    event.preventDefault();
    // console.log(seachCertification);
  };
  const onClickCetification = (event) => {
    const {
      target: { textContent },
    } = event;
    data.testSet.forEach((test) => {
      if (test.title === textContent) test.isLike = !test.isLike;
    });
    console.log(data.testSet);
  };
  return (
    <div className="searchform-container">
      <Paper component="form" onSubmit={onSubmit} className="searchform-paper">
        <IconButton type="submit" aria-label="search">
          <SearchIcon />
        </IconButton>
        <InputBase
          placeholder="Search.."
          type="text"
          value={seachCertification}
          onChange={onChange}
        />
      </Paper>
      <ul>
        {certificationResults.map((certificationResult, index) => (
          <li
            key={index}
            onClick={onClickCetification}
            style={{ color: certificationResult.isLike ? "red" : "" }}
          >
            {certificationResult.title}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SearchForm;
