import React from "react";
import { useSelector } from "react-redux";
import { SearchForm, PopularCertificate } from "../components";
import useSWR from "swr";
import fetcher from "../utils/fetcher";
const Home = () => {
  const isSignedIn = useSelector((state) => state.auth.isSignedIn);
  const { data: certRecomByExaminee } = useSWR(
    `/api/certificate/CertRecomByExaminee/`,
    fetcher
  );
  const { data: certRecomByExamineeSil } = useSWR(
    `/api/certificate/CertRecomByExamineeSil/`,
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
  return (
    <div>
      {isSignedIn ? (
        <>
          <SearchForm />
          <div className='pop-certs'>
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
        </>
      ) : (
        <SearchForm />
      )}
    </div>
  );
};

export default Home;