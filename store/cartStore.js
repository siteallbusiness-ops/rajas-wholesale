"use client";

import { create } from "zustand";
import { persist } from "zustand/middleware";

/**
 * @typedef {Object} CartItem
 * @property {string} id
 * @property {string} productId
 * @property {string} variantId
 * @property {string} handle
 * @property {string} title
 * @property {string} variantTitle
 * @property {number} price
 * @property {string|null} image
 * @property {number} quantity
 */

export const useCartStore = create(
  persist(
    (set, get) => ({
      items: [],
      isOpen: false,

      openCart: () => set({ isOpen: true }),
      closeCart: () => set({ isOpen: false }),
      toggleCart: () => set((state) => ({ isOpen: !state.isOpen })),

      addItem: (item) => {
        const { items } = get();
        const existing = items.find((i) => i.variantId === item.variantId);

        if (existing) {
          set({
            items: items.map((i) =>
              i.variantId === item.variantId
                ? { ...i, quantity: i.quantity + (item.quantity || 1) }
                : i
            ),
            isOpen: true,
          });
          return;
        }

        set({
          items: [
            ...items,
            {
              ...item,
              id: `${item.productId}-${item.variantId}`,
              quantity: item.quantity || 1,
            },
          ],
          isOpen: true,
        });
      },

      removeItem: (variantId) =>
        set({ items: get().items.filter((i) => i.variantId !== variantId) }),

      updateQuantity: (variantId, quantity) => {
        if (quantity <= 0) {
          get().removeItem(variantId);
          return;
        }
        set({
          items: get().items.map((i) =>
            i.variantId === variantId ? { ...i, quantity } : i
          ),
        });
      },

      clearCart: () => set({ items: [] }),

      getItemCount: () =>
        get().items.reduce((total, item) => total + item.quantity, 0),

      getSubtotal: () =>
        get().items.reduce(
          (total, item) => total + item.price * item.quantity,
          0
        ),
    }),
    {
      name: "rajas-wholesale-cart",
      partialize: (state) => ({ items: state.items }),
    }
  )
);
