import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { SearchForm, PopularCertificate } from "components";
import useSWR from "swr";
import fetcher from "utils/fetcher";
import axios from "axios";
const Home = () => {
  const isSignedIn = useSelector((state) => state.auth.isSignedIn);
  //   const [isSignedUp, setIsSignedUp] = useState(needSignUp);

  const { data: certRecomByExaminee } = useSWR(
    `/api/certificate/recom-examinee/`,
    fetcher
  );
  const { data: certRecomByExamineeSil } = useSWR(
    `/api/certificate/recom-examinee-sil/`,
    fetcher
  );

  //   const { data: certRecomByInterest } = useSWR(
  //     `/api/certificate/CertRecomByInterest/`,
  //     fetcher
  //   );
  //   const { data: certRecomByInterestSil } = useSWR(
  //     `/api/certificate/CertRecomByInterestSil/`,
  //     fetcher
  //   );
  //   if (needSignUp) return <Redirect to="/signup" />;
  //   if (needSignUp === undefined) return <PopUpLoading isLoading={true} />;

  //   const getTestData = async () => {
  //     try {
  //       const res = await axios.get(
  //         "https://7oxpckq4u7.execute-api.us-east-1.amazonaws.com/test/api/certificate"
  //       );
  //       console.log(res);
  //     } catch (e) {
  //       console.log(e);
  //     }
  //   };
  return (
    <>
      <div>
        {(
          <>
            <SearchForm />
            <div className="pop-certs">
              <PopularCertificate
                popularCertificates={certRecomByExaminee}
                title={"필기 인기 자격증"}
                engTitle={"pop-cert-pil"}
              />
              <PopularCertificate
                popularCertificates={certRecomByExamineeSil}
                title={"실기 인기 자격증"}
                engTitle={"pop-cert-sil"}
              />
              {/* <PopularCertificate
            popularCertificates={certRecomByExaminee}
            title={"필기 인기 자격증"}
          />{" "}
          <PopularCertificate
            popularCertificates={certRecomByExaminee}
            title={"필기 인기 자격증"}
          /> */}
            </div>
            {/* <button onClick={getTestData}>aa</button> */}
          </>
        ) }
      </div>
    </>
  );
};

export default Home;
