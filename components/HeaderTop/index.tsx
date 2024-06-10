import styles from "./styles.module.css";
import SocialMediaLinks from "./SocialLink/SocialMediaLinks";
import HeaderTopActions from "./HeaderTopActions/index";
import React from "react";
import { useCurrency } from "@/contexts/CurrencyContext";

export default function HeaderTop() {
  return (
    <header>
      <div className={styles.headerTop}>
        <div className={styles.container}>
          <SocialMediaLinks />
          {/* <MinimalComponent /> */}
          {/* <HeaderAlertNews alertMessage={alertMessage} /> */}
          <HeaderTopActions />
        </div>
      </div>
    </header>
  );
}
