
import create from 'zustand';
import { persist } from 'zustand/middleware';

interface CurrencyState {
  currency: string;
  setCurrency: (currency: string) => void;
}

export const useCurrencyStore = create<CurrencyState>(
  persist(
    (set) => ({
      currency: 'usd',
      setCurrency: (currency) => set({ currency }),
    }),
    {
      name: 'currency-storage', // name of the item in local storage
    }
  )
);
