import React from "react";
import "@react-pdf-viewer/core/lib/styles/index.css";
import styles from "../about/About.module.css";
import { useTranslation } from "react-i18next";

export default function Contacts() {
  const { t} = useTranslation();

  return (
    <div className={styles.wrapper}>
      <div className={styles.footer}>
        {t("address")}
      </div>
      <div className={styles.lines3}>
        <div className={styles.line3}>
          {t("university")}
        </div>
        <br />
        <br />
        <br />
        <div className={styles.line3}>Telegram: @Azizbek_1711</div>
        <div className={styles.line3}>
          Email:
          <a
            href="mailto:agriculture.medicine.journal@gmail.com"
          >
            agriculture.medicine.journal@gmail.com
          </a>
        </div>
      </div>
    </div>
  );
}
