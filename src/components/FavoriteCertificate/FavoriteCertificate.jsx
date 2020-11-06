import React from "react";
import "./FavoriteCertificate.css";
import data from "../../data/testData.json";
const testSet = data.testSet;
const FavoriteCertificate = () => {
  return (
    <div className="favorite-certificate-container">
      <div className="favorite-certificate-inner-container">
        <ul>
          {testSet.map(
            (ts) =>
              ts.isLike && (
                <li className="favorite-certificate-list">{ts.title}</li>
              )
          )}
        </ul>
      </div>
    </div>
  );
};

export default FavoriteCertificate;
