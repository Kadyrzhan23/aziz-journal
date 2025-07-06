import React from "react";
import styles from "./currentheader.module.css";
// import logo from ""; // или ваш логотип

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.left}>
        {/* <img src={''} alt="Logo" className={styles.logo} /> */}
        <nav className={styles.nav}>
          <a href="#">Home</a>
          <a href="#">Archive</a>
          <a href="#">About</a>
          <a href="#">Profile</a>
          <a href="#">Link5</a>
        </nav>
      </div>
      <div className={styles.actions}>
        <button className={`${styles.btn} ${styles.primary}`}>Action 1</button>
        <button className={`${styles.btn} ${styles.outline}`}>Action 2</button>
      </div>
    </header>
  );
};

export default Header;
