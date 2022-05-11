import React, { Children, useRef, useEffect, useState } from "react";
import styles from "../styles/LandingIntroduction.module.css";

const landingIntroduction = (props: { children: React.ReactNode }) => {
  // function AnimationTest() {
  //   const [animation, setAnimation] = useState(true);
  //   const areaRef = useRef<HTMLParagraphElement>();

  //   const handleScrollAnimation = () => {
  //     const elementTop = areaRef?.current?.getBoundingClientRect().top;
  //     setAnimation(checkIsInViewport(elementTop));
  //   };
  // }
  // useEffect(() => {
  //   window.addEventListener("scroll", (e) => {
  //     handleScrollAnimation(e);
  //   });
  //   return () => {
  //     window.removeEventListener("scroll", handleScrollAnimation);
  //   };
  // }, []);
  return (
    <>
      <div>
        <h1 className={styles.mainH1}>
          다양한 기술스택으로 당신의 홈페이지를 만들어드립니다.
        </h1>
        <h2 className={styles.mainH2}>
          디프랙은 어쩌구 저쩌구한 뭔가를 제공해줍니다.
        </h2>
      </div>
    </>
  );
};

export default landingIntroduction;
