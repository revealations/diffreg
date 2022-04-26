import { useState, useEffect } from "react";
import styles from "../styles/Landing.module.css";

const image = {
  width: "1000px;",
  height: "600px",
};

function Topbutton() {
  const [ScrollY, setScrollY] = useState(0);
  const [BtnStatus, setBtnStatus] = useState(false); // 버튼 상태

  const handleFollow = () => {
    setScrollY(window.pageYOffset);
    if (ScrollY > 100) {
      // 100 이상이면 버튼이 보이게
      setBtnStatus(true);
    } else {
      // 100 이하면 버튼이 사라지게
      setBtnStatus(false);
    }
  };

  const handleTop = () => {
    // 클릭하면 스크롤이 위로 올라가는 함수
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    setScrollY(0); // ScrollY 의 값을 초기화
    setBtnStatus(false); // BtnStatus의 값을 false로 바꿈 => 버튼 숨김
  };

  useEffect(() => {
    const watch = () => {
      window.addEventListener("scroll", handleFollow);
    };
    watch();
    return () => {
      window.removeEventListener("scroll", handleFollow);
    };
  });

  return (
    <div className="wrap">
      <button
        className={BtnStatus ? "topBtn active" : "topBtn"}
        onClick={handleTop}
      >
        TOP
      </button>
      <div
        onClick={handleTop}
        id="scrollElement"
        className={styles.imagecontainer}
      >
        <img src={"/images/mainimage1.png"} style={image} />
      </div>
    </div>
  );
}

export default Topbutton;