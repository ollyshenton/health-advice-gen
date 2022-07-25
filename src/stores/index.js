import { defineStore } from "pinia";
import { fetchAdvice } from "../api/advice.js";

export const useStore = defineStore({
  id: "mainStore",
  state: () => ({
    adviceList: {},
    adviceCurrent: {},
  }),
  getters: {},
  actions: {
    async getAdvice() {
      try {
        const response = await fetchAdvice();

        this.adviceCurrent = response.data.slip;

        // keeps history of previous request for possible expansion
        this.adviceList[response.data.slip.id] = {
          id: response.data.slip.id,
          advice: response.data.slip.advice,
        };
      } catch (error) {
        // catch error here
        console.warn("error", error);
      }
    },
  },
});

export default useStore;
