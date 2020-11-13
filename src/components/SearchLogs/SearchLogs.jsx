import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const SeacrhLogs = () => {
  const [logs, setLogs] = useState([]);
  useEffect(() => {
    setLogs(JSON.parse(sessionStorage.getItem("search-log"))?.log);
  }, []);

  return (
    <ul>
      <span>내가 검색한 자격증</span>
      {logs?.map((e, i) => (
        <li key={`log-${i}`}>
          <Link to={`/detail/${e.certId}`}>{e.name}</Link>
        </li>
      ))}
    </ul>
  );
};

export default SeacrhLogs;
