import React from "react";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import styles from "../../styles/Layout.module.css";

const Layout = (props: { children: React.ReactNode }) => {
  return (
    <div className={styles.maingradient}>
      <Header></Header>
      <main className={styles.layoutMain}>{props.children}</main>
      <Footer></Footer>
    </div>
  );
};

export default Layout;
