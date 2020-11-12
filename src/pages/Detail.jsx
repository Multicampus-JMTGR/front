import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import { useSelector } from "react-redux";
import useSWR from "swr";
import fetcher from "utils/fetcher";
import "layouts/App/App.css";
import { Loading, PopUpLoading, SearchForm } from "components";
import axios from "axios";

const Detail = () => {
  const [alreadyLike, setAlreadyLike] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { detail: certId } = useParams();
  const { data: detailData } = useSWR(`/api/certificate/${certId}`, fetcher);
  const userObj = useSelector((state) => state.auth.userObj);
  const { data: myData, revalidate: revalidateUser } = useSWR(
    `/api/user/${userObj.profileObj.email}`,
    fetcher
  );
  useEffect(() => {
    let isLike = myData?.cert_likes.find((e) => e.cert_id == certId);
    setAlreadyLike(isLike);
  }, []);
  const onClickLike = (event) => {
    const {
      target: {},
    } = event;
    setIsLoading(true);
    axios
      .post(`/api/cert_like/${userObj.profileObj.email}/${certId}`)
      .then((res) => {
        revalidateUser();
        setIsLoading(false);
        setAlreadyLike(true);
        console.log(res);
      })
      .catch((e) => console.log(e));
  };
  /**
   * , {
        email: myData?.email,
        name: myData?.name,
        phone_number: myData?.phone_number,
        interest: myData?.interest,
        cert_id: certId,
      }
   */
  if (isLoading) return <PopUpLoading isLoading={isLoading} />;
  return (
    <>
      <SearchForm />
      {detailData ? (
        <div className="certificate-detail-container">
          <h1 className="certificate-name">{detailData.name}</h1>
          <div className="certificate-detail-inner-container">
            <div>
              <span className="certificate-details"> 주관 : </span>
              <span className="certificate-values">
                {detailData.department}
              </span>
            </div>
            <div>
              <span className="certificate-details">필기 합격률 : </span>
              <span className="certificate-values">
                {detailData.pass_percent} %
              </span>
            </div>
            <div>
              <span className="certificate-details">실기 합격률 : </span>
              <span className="certificate-values">
                {detailData.pass_percent_sil} %
              </span>
            </div>
            <div>
              <span className="certificate-details">필기 접수비 : </span>
              <span className="certificate-values">{detailData.cost} 원</span>
            </div>
            <div>
              <span className="certificate-details">실기 접수비 : </span>
              <span className="certificate-values">
                {detailData.cost_sil} 원
              </span>
            </div>
          </div>
          {alreadyLike ? (
            <button onClick={onClickLike}>Delete from Like</button>
          ) : (
            <button onClick={onClickLike}>Like!</button>
          )}
        </div>
      ) : (
        <Loading className="certificate-detail-container" />
      )}
    </>
  );
};
export default Detail;
