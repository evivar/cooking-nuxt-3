<template>
  <div class="table">
    <div class="table--search">
      <CKInput placeholder="Buscar..." v-model="query"></CKInput>
      <CKButton>
        <template #icon>
          <i class="material-symbols-outlined">search</i>
        </template>
      </CKButton>
    </div>
    <div class="table--content">
      <CKRecipeCard
        :class="{ selected: recipeStore.selectedRecipe?.id === recipe.id }"
        @click="onRecipeClick(recipe)"
        v-for="recipe in recipes"
        :key="recipe.id"
        :recipe-title="recipe.title"
        :recipe-date="recipe.date"
      />
    </div>
  </div>
</template>

<script setup>
import CKInput from "./CKInput.vue";
import CKButton from "./CKButton.vue";
import CKRecipeCard from "../molecules/CKRecipeCard.vue";

defineProps({
  recipes: {
    type: Array,
    default: () => [],
  },
});

const recipeStore = useRecipeStore();

const query = ref(null);

const onRecipeClick = (recipe) => {
  recipeStore.setSelectedRecipe(recipe);
};
</script>

<style lang="scss" scoped>
.table {
  height: calc(100vh - 210px);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  &--search {
    @apply lg:w-1/2 w-full;
    height: 10%;
    display: flex;
    gap: 4px;
    align-items: center;
    padding: 4px;
  }
  &--content {
    height: 90%;
    padding: 4px;
    display: flex;
    flex-direction: column;
    gap: 4px;
    overflow-y: scroll;
    & > .ck-recipe-card {
      height: 84px;
    }
  }
}

.selected {
  background: #12b488;
  border-color: black;
  color: white;
}
</style>
