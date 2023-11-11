"use client";
import React from "react";
import styles from "./ProductCard.module.scss";
import Productdetails from "@/components/sections/Productdetails";
import cx from "classnames";
import AddButton from "@/components/base/AddButton";
import { useRouter } from "next/navigation";

const ProductCard = ({ data, className, ...props }) => {
  const router = useRouter();
  const handleRedirect = () => {
    router.push("/product-details");
  };

  return (
    <div
      onClick={handleRedirect}
      className={cx(styles.cardContainer, className)}
      {...props}
    >
      <div
        style={{
          border: "1px solid green",
          width: "40%",
          backgroundColor: "green",
          borderRadius: "5px",
          color: "white",
          marginBottom: "5px",
        }}
      >
        40% off
      </div>
      <div className={styles.cardimg}>
        <img src="https://m.media-amazon.com/images/I/71I2hS1e-1L._AC_UF1000,1000_QL80_.jpg" />
      </div>

      <div className={styles.cardinfo}>
        <div className={styles.productName}>ACHAR{data}</div>

        <div className={styles.details}>
          <div className={styles.priceInfo}>
            <del> $50/kg</del> <span>$40/kg</span>
          </div>
          <div className={styles.price}>$30</div>
        </div>

        <div className={styles.cardlower}>
          <div style={{ fontSize: "13px", fontWeight: "100px" }}>1kg</div>
          <AddButton />
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
