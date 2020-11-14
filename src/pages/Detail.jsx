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

const catName = {
  examinee: "필기 접수인원",
  examinee_sil: "실기 접수인원",
  pass_percent: "필기 합격률",
  pass_percent_sil: "실기 합격률",
  cost: "필기 접수비",
  cost_sil: "실기 접수비",
};
const unit = {
  examinee: " 명",
  examinee_sil: " 명",
  pass_percent: " %",
  pass_percent_sil: " %",
  cost: " 원",
  cost_sil: " 원",
};
const CertDetail = ({ category, value }) => {
  return (
    <div className="certificat-detail-category-value">
      <span className="certificate-details"> {category}</span>
      <span className="certificate-values">{value}</span>
    </div>
  );
};
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
    // console.log(detailData[0]);
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
            <a href={detailData[0].link} target="_blank">
              {detailData[0].name}
            </a>
            {alreadyLike ? (
              <FavoriteIcon onClick={onClickLike} />
            ) : (
              <FavoriteBorderIcon onClick={onClickLike} />
            )}
          </div>
          <div className="certificate-detail-inner-container">
            <CertDetail category={"주관"} value={detailData[0].department} />
            {Object.keys(catName).map((key) => (
              <CertDetail
                category={catName[key]}
                value={`${detailData[0][key]} ${unit[key]}`}
              />
            ))}
          </div>
        </div>
      ) : (
        <Loading className="certificate-detail-container" />
      )}
    </>
  );
};
export default Detail;
