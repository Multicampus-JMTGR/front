import React, { useEffect, useState } from "react";
import "./FavoriteCertificate.css";

const FavoriteCertificate = ({ myData }) => {
  //   const [favCerts, setFavCerts] = useState(myData?.myData.cert_likes);
  useEffect(() => {
    console.log(myData);
  }, [myData]);

  return (
    <div className="favorite-certificate-container">
      <span>Favorite Certificates</span>
      <div className="favorite-certificate-inner-container">
        <ul>
          {myData && myData.cert_likes.length !== 0 ? (
            myData.cert_likes.map((favCert) => (
              <li className="favorite-certificate-list">{favCert.name}</li>
            ))
          ) : (
            <li className="favorite-certificate-list">
              No certificate You Like
            </li>
          )}
        </ul>
      </div>
    </div>
  );
};

export default FavoriteCertificate;
