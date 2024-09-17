import React from "react";
import styles from "./SubscriptionPlans.module.css";

interface BenefitItemProps {
  iconSrc: string;
  text: string;
}

const BenefitItem: React.FC<BenefitItemProps> = ({ iconSrc, text }) => {
  return (
    <div className={styles.benefitItem}>
      <img src={iconSrc} alt="" className={styles.benefitIcon} />
      <div className={styles.benefitText}>{text}</div>
    </div>
  );
};

export default BenefitItem;
