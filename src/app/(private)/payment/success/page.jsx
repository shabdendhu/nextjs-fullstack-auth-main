"use client";
import Button from "@mui/material/Button";
import { useRouter } from "next/navigation";
import React from "react";

const Success = () => {
  const router = useRouter();
  return (
    <div style={{ margin: "auto", minHeight: "100vh" }}>
      <p style={{ fontSize: "30px", textAlign: "center" }}>Payment Confirmed</p>
      <img src={"/confirm-payment.png"} alt="confirm payment" />
      <div style={{ textAlign: "center" }}>
        <Button
          onClick={() => {
            router.push("/");
          }}
          style={{
            backgroundColor: "blue",
            color: "white",
          }}
        >
          Buy More
        </Button>
      </div>
    </div>
  );
};

export default Success;
