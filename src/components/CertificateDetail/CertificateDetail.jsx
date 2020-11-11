import React from "react";

const CertificateDetail = ({ certificateData, index, showAll, engTitle }) => {
  return (
    <li
      key={`${engTitle}-${index}`}
      id={`${engTitle}-${index}`}
      className={showAll ? "unRollingLi" : "rollingLi"}
    >
      <span>{certificateData.name}</span>
    </li>
  );
};
export default CertificateDetail;
/**
 * 
 *         <div className={styles.container}>
            { 
                <ul className={ showAll ? styles.unRollingUl : styles.rollingUl}>
                {
                bannerData.map((bd,index)=>(
                    <li key={`banner-${index}`} id={`banner${index}`} className={showAll ? styles.unRollingLi : styles.rollingLi}>
                        <a href={`https:/www.tpirates.com/${bd.permalink}`}>
                            <Typography component='span'>{bd.label}</Typography>
                            <Typography component='span' className={styles.price}>{bd.price}</Typography>
                            <Typography component='span' >{bd.comment}</Typography>
                        </a>
                    </li>
                ))
                }
                </ul>
            }
            <IconButton onClick={onClick} className={showAll ? classes.showAll : classes.showRolling}><ExpandMoreIcon style={{color:"white"}} fontSize="large" /></IconButton>
            </div>
 */
