import { defineStore } from "pinia";

export const useToggleStore = defineStore(
  "toggle",
  () => {
    const state = ref(false);

    const toggle = () => (state.value = !state.value);

    return { toggle, state };
  },
  { persist: true }
);
