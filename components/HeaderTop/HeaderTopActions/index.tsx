import React from "react";
import { useCurrencyStore } from "@/store/useCurrencyStore";

const HeaderTopActions: React.FC = () => {
  const currency = useCurrencyStore((state) => state.currency);
  const setCurrency = useCurrencyStore((state) => state.setCurrency);

  const handleCurrencyChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setCurrency(event.target.value);
  };

  return (
    <div className="header-top-actions">
      <select name="currency" value={currency} onChange={handleCurrencyChange}>
        <option value="usd">USD $</option>
        <option value="eur">EUR €</option>
      </select>
      <select name="language">
        <option value="en-US">English</option>
        <option value="es-ES">Español</option>
        <option value="fr">Français</option>
      </select>
    </div>
  );
};

export default HeaderTopActions;
