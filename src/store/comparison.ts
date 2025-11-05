import { create } from 'zustand';
import { ComparisonState } from '@/types';

export const useComparisonStore = create<ComparisonState>((set) => ({
  product1: null,
  product2: null,
  setProduct1: (id) => set({ product1: id }),
  setProduct2: (id) => set({ product2: id }),
  reset: () => set({ product1: null, product2: null }),
}));
