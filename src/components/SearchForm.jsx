import React, { useState, useEffect } from "react";

import data from "../data/testData.json";

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
      if (test.title === textContent)
        test.isLike = !test.isLike;
    });
    console.log(data.testSet)
  };
  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        placeholder="자격증 검색"
        value={seachCertification}
        onChange={onChange}
        autoFocus
      />
      <input type="submit" value="Search" />
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
    </form>
  );
};

export default SearchForm;
