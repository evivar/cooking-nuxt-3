<template>
  <div class="home">
    <div class="last-recipes">
      <div class="title">
        <span>Últimas recetas</span>
        <CKButton>
          <template #icon>
            <i class="material-symbols-outlined">add</i>
          </template>
          Añadir receta
        </CKButton>
      </div>
      <div class="last-recipes--container">
        <CKRecipeCard
          v-for="recipe in lastThreeRecipes"
          :key="recipe.id"
          :recipe-title="recipe.fields.title"
          :recipe-date="recipe.createdTime"
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

const lastThreeRecipes = ref([]);

const { data } = await useFetch("/api/three-recipes");
lastThreeRecipes.value = data.value;
</script>

<style lang="scss" scoped>
.home {
  @apply flex lg:flex-row flex-col-reverse lg:gap-0 gap-4;
  flex-wrap: wrap-reverse;
}

.last-recipes {
  @apply lg:w-1/2 w-full;
  display: flex;
  flex-direction: column;
  gap: 8px;
  & > .title {
    @apply lg:text-xl text-lg;
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
    @apply lg:text-xl text-lg;
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
