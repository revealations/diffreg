import styles from "../../../styles/Layout.module.css";
import { HTMLAttributes } from "react";

const Footer = () => {
  const spangray = {
    fontSize: "12px",
    letterSpacing: "-0.25px",
    color: "gray",
    padding: "4px",
  };
  const fontsize = {
    fontSize: "22px",
  };
  return (
    <div className={styles.footer}>
      <div className={styles.footerWrapper}>
        <div className={styles.footerColumnWrapper}>
          <div>
            <span style={fontsize} className={styles.spanbar}>
              고객센터
            </span>
            <span style={fontsize} className={styles.span}>
              010-3308-8078
            </span>
          </div>
          <div>
            <div>
              <span className={styles.spanbar}>대표</span>
              <span className={styles.span}>임오</span>
            </div>
            <div>
              <span className={styles.spanbar}>사업자번호</span>
              <span className={styles.span}>120-87-12323 휴먼리소스</span>
            </div>
            <div>
              <span className={styles.spanbar}>오시는길</span>
              <span className={styles.span}>
                경기도 안양시 동안구 시민대로327번길 7 대명글로벌비즈스퀘어
              </span>
            </div>
            <div>
              <span style={spangray}>
                본 사이트는 무단으로 수집되는 것을 동의합니다. © DIFFRAG
              </span>
            </div>
          </div>
        </div>
        <div>sfounafouwnfwoun</div>
      </div>
    </div>
  );
};
export default Footer;
