import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./FavoriteCertificate.css";
import axios from "axios";
import PopUpLoading from "../Loading/PopUpLoading";

const FavoriteCertificate = ({ myData, revalidateUser }) => {
  const [isLoading, setIsLoading] = useState(false);
  //   useEffect(() => {
  //   }, []);
  const onClickDelete = (e) => {
    const {
      target: { value },
    } = e;
    setIsLoading(true);
    axios
      .post(`/api/cert_like/${myData.email}/${value}`)
      .then((res) => {
        revalidateUser();
        setIsLoading(false);
        console.log(res);
      })
      .catch((e) => console.log(e));
  };
  if (isLoading) return <PopUpLoading isLoading={isLoading} />;
  return (
    <div className="favorite-certificate-container">
      <span>Favorite Certificates</span>
      <div className="favorite-certificate-inner-container">
        <ul>
          {myData && myData.cert_likes.length !== 0 ? (
            myData.cert_likes.map((favCert, i) => (
              <li key={i} className="favorite-certificate-list">
                <Link to={`/detail/${favCert.cert_id}`}>{favCert.name}</Link>
                <button value={favCert.cert_id} onClick={onClickDelete}>
                  X
                </button>
              </li>
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
