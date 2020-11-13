import React, { useState, useEffect } from "react";
import { Redirect, useParams } from "react-router";
import { useSelector } from "react-redux";
import useSWR from "swr";
import fetcher from "utils/fetcher";
import "layouts/App/App.css";
import { Loading, PopUpLoading, SearchForm } from "components";
import axios from "axios";
import FavoriteIcon from "@material-ui/icons/Favorite";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";

const Detail = () => {
  const [alreadyLike, setAlreadyLike] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const isSignedIn = useSelector((state) => state.auth.isSignedIn);
  const { detail: certId } = useParams();
  const { data: detailData } = useSWR(`/api/certificate/${certId}`, fetcher);
  const userObj = useSelector((state) => state.auth.userObj);
  const { data: myData, revalidate: revalidateUser } = useSWR(
    `/api/user/${userObj?.profileObj.email}`,
    fetcher
  );
  useEffect(() => {
    let isLike = myData?.cert_likes?.find((e) => e.cert_id == certId);
    setAlreadyLike(isLike);
  }, []);
  const onClickLike = (event) => {
    const {
      target: {},
    } = event;
    setAlreadyLike((prev) => !prev);
    setIsLoading(true);
    axios
      .post(`/api/cert_like/${userObj.profileObj.email}/${certId}`, {
        email: userObj.profileObj.email,
        cert_id: certId,
      })
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
  if (!isSignedIn) {
    alert("로그인 필요!");
    return <Redirect to="/" />;
  }
  return (
    <>
      <SearchForm />
      {detailData ? (
        <div className="certificate-detail-container">
          <div className="certificate-detail-name-like">
            <span>{detailData.name}</span>
            {alreadyLike ? (
              <FavoriteIcon onClick={onClickLike} />
            ) : (
              <FavoriteBorderIcon onClick={onClickLike} />
            )}
          </div>
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
        </div>
      ) : (
        <Loading className="certificate-detail-container" />
      )}
    </>
  );
};
export default Detail;
