import { create } from 'zustand';
import { persist } from 'zustand/middleware';

type CountStore = {
  count: number;
  increment: () => void;
  decrement: () => void;
};

export const useCountStore = create<CountStore>()(
  persist(
    (set) => ({
      count: 0,
      increment: () => set((state) => ({ count: state.count + 1 })),
      decrement: () => set((state) => ({ count: state.count - 1 })),
    }),
    { name: 'count-store' }
  )
);
