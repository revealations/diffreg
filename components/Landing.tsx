import React, { useEffect, useState } from "react";
import Topbutton from "./Topbutton";
import RenderLanding from "./RenderLanding";
import styles from "../styles/Landing.module.css";

const landing = () => {
  const image = {
    width: "1000px;",
    height: "600px",
  };

  return (
    <div className={styles.landing}>
      <h1 className={styles.mainH1}>당신만의 홈페이지를 만들어보세요</h1>
      <h2 className={styles.mainH2}>
        디프랙은 어쩌구 저쩌구한 뭔가를 제공해줍니다.
      </h2>
      <RenderLanding></RenderLanding>
      <Topbutton></Topbutton>
    </div>
  );
};
export default landing;
