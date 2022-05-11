import { HTMLAttributes } from "react";
import { useRouter } from "next/router";
import Link from "next/Link";
import styles from "../../../styles/Layout.module.css";

const Header = () => {
  const menuList = {
    listStyleType: "none",
    margin: "0px",
    lineHeight: "4rem",
    color: "#9d9d9d",
    paddingLeft: "0px",
  } as HTMLAttributes<any>["style"];
  const login = {
    listStyleType: "none",
    margin: "0px",
    lineHeight: "4rem",
    color: "white",
  } as HTMLAttributes<any>["style"];
  const listItem = {
    float: "left",
    fontSize: "14px",
    height: "4rem",
    paddingLeft: "10px",
    paddingRight: "10px",
  } as HTMLAttributes<any>["style"];
  const headerSpan = {
    cursor: "pointer",
  } as HTMLAttributes<any>["style"];
  return (
    <div className={styles.navbar}>
      <nav className={styles.menubar}>
        <div className={styles.menubarContainer}>
          <ul style={menuList}>
            <Link href="/">
              <li className={styles.title}>Diffreg</li>
            </Link>
            <Link href="/">
              <li className={styles.listItem}>Home</li>
            </Link>
            <li className={styles.listItem}>About</li>
            <Link href="/contact">
              <li className={styles.listItem}>Contact</li>
            </Link>
          </ul>
          <ul style={login}>
            <Link href="/submitForm">
              <li style={listItem}>
                <span style={headerSpan}>상담 신청</span>
              </li>
            </Link>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Header;
