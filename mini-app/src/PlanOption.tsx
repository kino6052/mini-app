import React from "react";
import styles from "./SubscriptionPlans.module.css";

interface PlanOptionProps {
  phoneNumber: string;
  nickname: string;
  price: string;
  isSelected: boolean;
}

const PlanOption: React.FC<PlanOptionProps> = ({
  phoneNumber,
  nickname,
  price,
  isSelected,
}) => {
  return (
    <div
      className={`${styles.planOption} ${
        isSelected ? styles["planOption--selected"] : ""
      }`}
    >
      <div className={styles.planContent}>
        <div
          className={`${styles.radioButton} ${
            isSelected ? styles["radioButton--selected"] : ""
          }`}
        />
        <div className={styles.planDetails}>
          <div className={styles.planTitle}>{phoneNumber}</div>
          <div className={styles.planDescription}>{nickname}</div>
        </div>
        <div className={styles.planPrice}>{price}</div>
      </div>
    </div>
  );
};

export default PlanOption;
