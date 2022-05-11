import React from "react";
import Layout from "../components/Layout/Layout";
import TextBox from "../components/utils/TextBox";
import styles from "../styles/submitForm.module.css";

const submitForm = () => {
  const labelText = {
    width: "6rem",
    color: "black",
    marginRight: "1rem",
  };
  return (
    <>
      <Layout>
        <div className={styles.pageWrapper}>
          <div className={styles.mainH1}>지금 시작해보세요.</div>
          <div className={styles.form}>
            <div className={styles.row}>
              <span style={labelText}>회사명(이름) : </span>
              <TextBox width="100" height="100"></TextBox>
            </div>
            <div className={styles.row}>
              <span style={labelText}>연락처 : </span>
              <TextBox width="100" height="100"></TextBox>
            </div>
            <div className={styles.row}>
              <span style={labelText}>서비스 선택 : </span>
              <TextBox width="100" height="100"></TextBox>
            </div>
            <div className={styles.row}>
              <span style={labelText}>이름 : </span>
              <TextBox width="100" height="100"></TextBox>
            </div>
            <button className={styles.submitButton}>제출</button>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default submitForm;
