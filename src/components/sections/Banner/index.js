import React from "react";
import styles from "./Banner.module.scss";
import ArrowBackIosNewOutlinedIcon from "@mui/icons-material/ArrowBackIosNewOutlined";
import ArrowForwardIosOutlinedIcon from "@mui/icons-material/ArrowForwardIosOutlined";

const Banner = () => {
  return (
    <div className={styles.component}>
      <ArrowBackIosNewOutlinedIcon style={{ color: "#FFFFFF" }} />
      <div className={styles.bannerContainer}>
        <img
          src="https://img.crofarm.com/images/promotions/f6ceff3a1f04.png"
          alt=""
        />
        <img
          src="https://img.crofarm.com/images/promotions/f6ceff3a1f04.png"
          alt=""
        />
        <img
          src="https://img.crofarm.com/images/promotions/f6ceff3a1f04.png"
          alt=""
        />
        <img
          src="https://img.crofarm.com/images/promotions/f6ceff3a1f04.png"
          alt=""
        />
      </div>
      <ArrowForwardIosOutlinedIcon style={{ color: "#FFFFFF" }} />
    </div>
  );
};

export default Banner;
