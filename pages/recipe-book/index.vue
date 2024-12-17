<template>
  <div class="recipe-book">
    <div class="recipe-book--title">
      <span>Libro de recetas</span>
      <CKButton @click="$router.push('/new-recipe')">
        <template #icon>
          <i class="material-symbols-outlined">add</i>
        </template>
        Añadir receta
      </CKButton>
    </div>

    <div class="recipe-book--content">
      <div class="recipe-book--content__list">
        <span class="title"> Lista de recetas </span>
        <CKTable :recipes="recipes"></CKTable>
      </div>
      <hr class="separator lg:hidden block w-full my-2" />
      <div class="recipe-book--content__recipe">
        <CKViewRecipe :recipe="recipeStore.selectedRecipe"></CKViewRecipe>
      </div>
    </div>
  </div>
</template>

<script setup>
import CKButton from "~/components/atoms/CKButton.vue";
import CKTable from "~/components/atoms/CKTable.vue";
import CKViewRecipe from "~/components/organisms/CKViewRecipe.vue";

const recipeStore = useRecipeStore();

const recipes = ref([]);

const { data } = await useFetch("/api/get-all-recipes");
recipes.value = data.value;

onMounted(async () => {
  if (!recipeStore.selectedRecipe) {
    recipeStore.setSelectedRecipe(recipes.value[0]);
  }
});
</script>

<style lang="scss" scoped>
.recipe-book {
  &--title {
    @apply flex flex-row items-center w-full justify-between;
    & > span {
      @apply lg:text-xl text-base font-semibold;
    }
  }
  &--content {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap-reverse;
    &__list {
      @apply lg:w-1/2 w-full;
      display: flex;
      flex-direction: column;
      padding: 8px;
      & > .title {
        @apply lg:text-lg text-sm font-semibold;
      }
    }
    &__recipe {
      @apply lg:w-1/2 w-full;
      display: flex;
      flex-direction: column;
      padding: 8px;
    }
  }
}
</style>
