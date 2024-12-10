<template>
  <div class="home">
    <div class="last-recipes">
      <span class="title">Últimas recetas</span>
      <div class="last-recipes--container">
        <CKRecipeCard />
        <CKRecipeCard />
        <CKRecipeCard />
      </div>
    </div>
    <div class="shopping-list">
      <span class="title">Lista de la compra</span>
      <div class="shopping-list--container">
        <CKButton>
          <template #icon>
            <i class="material-symbols-outlined">add</i>
          </template>
          Añadir a la lista
        </CKButton>
      </div>
    </div>
  </div>
</template>

<script setup>
import CKRecipeCard from "~/components/molecules/CKRecipeCard.vue";
import CKButton from "~/components/atoms/CKButton.vue";
</script>

<style lang="scss" scoped>
.home {
  @apply flex lg:flex-row flex-col-reverse;
  flex-wrap: wrap-reverse;
}

.last-recipes {
  @apply lg:w-1/2 w-full;
  display: flex;
  flex-direction: column;
  gap: 8px;
  & > .title {
    @apply lg:text-xl text-lg;
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
  & > .title {
    @apply lg:text-xl text-lg mb-4;
  }
}
</style>