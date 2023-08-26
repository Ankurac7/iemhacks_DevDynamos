import type { NextPage } from "next";
import styles from "./index.module.css";
const Desktop1: NextPage = () => {
  return (
    <button className={styles.desktop1}>
      <div className={styles.desktop1Child} />
      <div className={styles.logo}>logo</div>
      <div className={styles.desktop1Item} />
      <div className={styles.about}>About</div>
      <div className={styles.desktop1Inner} />
      <div className={styles.signIn}>Sign In</div>
      <div className={styles.rectangleDiv} />
      <div className={styles.contact}>Contact</div>
      <div className={styles.vectorParent}>
        <img className={styles.componentChild} alt="" src="/rectangle-6.svg" />
        <div className={styles.notes}>Notes</div>
        <div className={styles.componentItem} />
      </div>
      <div className={styles.desktop1Child1} />
      <img className={styles.lineIcon} alt="" src="/line-2.svg" />
    </button>
  );
};

export default Desktop1;
