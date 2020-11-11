import React from "react";
import { Link } from "react-router-dom";
const CertificateDetail = ({ certificateData, index, showAll, engTitle }) => {
  return (
    <li
      key={`${engTitle}-${index}`}
      id={`${engTitle}-${index}`}
      className={showAll ? "unRollingLi" : "rollingLi"}
    >
      <Link to={`/detail/${certificateData.cert_id}`}>
        {index + 1}
        {". "}
        {certificateData.name}
      </Link>
    </li>
  );
};
export default CertificateDetail;
