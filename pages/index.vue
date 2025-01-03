<template>
  <div class="home">
    <div class="last-recipes">
      <CKWeeklyMenu/>
      <div class="title">
        <span>Últimas recetas</span>
        <CKButton @click="$router.push('/new-recipe')">
          <template #icon>
            <i class="material-symbols-outlined">add</i>
          </template>
          Añadir receta
        </CKButton>
      </div>
      <div class="last-recipes--container">
        <CKRecipeCard
          @click="onLastRecipeClick(recipe)"
          v-for="recipe in lastThreeRecipes"
          :key="recipe.id"
          :recipe-title="recipe.title"
          :recipe-date="recipe.date"
        />
      </div>
    </div>
    <div class="shopping-list">
      <div class="title">
        <span>Lista de la compra</span>
      </div>
      <div class="shopping-list--container">
        <CKShoppingList></CKShoppingList>
      </div>
    </div>
  </div>
</template>

<script setup>
import CKRecipeCard from "~/components/molecules/CKRecipeCard.vue";
import CKButton from "~/components/atoms/CKButton.vue";
import CKShoppingList from "~/components/organisms/CKShoppingList.vue";
import CKWeeklyMenu from "~/components/organisms/CKWeeklyMenu.vue";

const router = useRouter();

const recipeStore = useRecipeStore();

const lastThreeRecipes = ref([]);

const { data } = await useFetch("/api/three-recipes");
lastThreeRecipes.value = data.value;

const onLastRecipeClick = (recipe) => {
  recipeStore.setSelectedRecipe(recipe);
  router.push("/recipe-book");
};
</script>

<style lang="scss" scoped>
.home {
  @apply flex lg:flex-row flex-col-reverse lg:gap-0 gap-4;
}

.last-recipes {
  @apply lg:w-1/2 w-full;
  display: flex;
  flex-direction: column;
  gap: 8px;
  & > .title {
    @apply lg:text-xl text-base font-semibold;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 8px;
  }
  &--container {
    padding: 8px;
    display: flex;
    flex-direction: column;
    gap: 8px;
  }
}
.shopping-list {
  @apply lg:w-1/2 w-full;
  display: flex;
  flex-direction: column;
  max-height: calc(100vh - 88px);
  gap: 8px;
  & > .title {
    @apply lg:text-xl text-base font-semibold;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 8px;
  }
  &--container {
    padding: 8px;
  }
}
</style>
