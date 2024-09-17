import React from "react";
import styles from "./SubscriptionPlans.module.css";
import PlanOption from "./PlanOption";
import BenefitItem from "./BenefitItem";

const SubscriptionPlans: React.FC = () => {
  const plans = [
    {
      phoneNumber: "+7903111111",
      nickname: "Никнейм",
      price: "94.80 ₽",
      isSelected: true,
    },
    {
      phoneNumber: "+7903111111",
      nickname: "Никнейм",
      price: "10.90 ₽",
      isSelected: false,
    },
  ];

  const benefits = [
    {
      iconSrc:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/51e39ac22203f4288b9c96a9b876d81de2f1bd83aa945530ce7b4928ebd2edaf?placeholderIfAbsent=true&apiKey=d15c50c967e9435197f2b21557a5c1bd",
      text: "Безраничный доступ",
    },
    {
      iconSrc:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/955dc9dae8923c8761b15d7509bb76e8e3414847a703b8dc624592495438270d?placeholderIfAbsent=true&apiKey=d15c50c967e9435197f2b21557a5c1bd",
      text: "200GB в облаке",
    },
    {
      iconSrc:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/2fd240504e68d73ddbdc19c703273d9712fa3b66c6e3f84370d5165d30140bc0?placeholderIfAbsent=true&apiKey=d15c50c967e9435197f2b21557a5c1bd",
      text: "Все",
    },
  ];

  return (
    <section className={styles.container}>
      <header className={styles.header}>
        <h1 className={styles.title}>Оплатить счёт</h1>
        <p className={styles.subtitle}>Оплати по Telegram!</p>
      </header>
      <div className={styles.optionsContainer}>
        <div className={styles.plansWrapper}>
          {plans.map((plan, index) => (
            <PlanOption key={index} {...plan} />
          ))}
          <div className={styles.benefitsSection}>
            <h2 className={styles.benefitsTitle}>Что входит:</h2>
            {benefits.map((benefit, index) => (
              <BenefitItem key={index} {...benefit} />
            ))}
          </div>
        </div>
      </div>
      <div className={styles.actionSection}>
        <button className={styles.actionButton}>Оплатить</button>
      </div>
    </section>
  );
};

export default SubscriptionPlans;
