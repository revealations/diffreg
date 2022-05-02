import { HTMLAttributes } from "react";
import styles from "../../../styles/Layout.module.css";

const Header = () => {
  const menuList = {
    listStyleType: "none",
    margin: "0px",
    lineHeight: "50px",
    color: "#9d9d9d",
    paddingLeft: "0px",
  } as HTMLAttributes<any>["style"];
  const login = {
    listStyleType: "none",
    margin: "0px",
    lineHeight: "50px",
    color: "white",
  } as HTMLAttributes<any>["style"];
  const listItem = {
    float: "left",
    fontSize: "14px",
    height: "50px",
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
            <li className={styles.title}>Diffreg</li>
            <li className={styles.listItem}>Home</li>
            <li className={styles.listItem}>About</li>
            <li className={styles.listItem}>Contact</li>
          </ul>
          <ul style={login}>
            <li style={listItem}>
              <span style={headerSpan}>sign in</span>
            </li>
            <li style={listItem}>
              <span style={headerSpan}>log in</span>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Header;
