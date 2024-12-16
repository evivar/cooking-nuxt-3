import { defineStore } from "pinia";

export const useRecipeStore = defineStore("recipe", {
  state: () => ({
    selectedRecipe: null,
  }),

  getters: {},

  actions: {
    setSelectedRecipe(recipe) {
      this.selectedRecipe = recipe;
    },
  },
});
