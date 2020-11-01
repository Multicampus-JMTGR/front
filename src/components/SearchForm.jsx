import React, { useState } from "react";

const SearchForm = () => {
  const [seachCertification, setSearchCertification] = useState("");
  const onChange = (event) => {
    const {
      target: { value },
    } = event;
    setSearchCertification(value);
    console.log(seachCertification);
  };
  const onSubmit = (event) => {
    event.preventDefault();
    console.log(seachCertification);
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
    </form>
  );
};

export default SearchForm;
