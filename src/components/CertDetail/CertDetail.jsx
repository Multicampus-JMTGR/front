import React from "react";
import "./CertDetail.css";

const CertDetail = ({ category, value }) => {
  return (
    <div className="certificat-detail-category-value">
      <span className="certificate-details"> {category}</span>
      <span className="certificate-values">{value}</span>
    </div>
  );
};
export default CertDetail;
