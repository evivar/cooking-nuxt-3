<template>
  <div class="recipe-book">
    <div class="recipe-book--title">
      <span>Libro de recetas</span>
      <CKButton>
        <template #icon>
          <i class="material-symbols-outlined">add</i>
        </template>
        Añadir receta
      </CKButton>
    </div>
    <div class="recipe-book--container">
      <div class="recipe-book--container__recipes">
        <CKRecipeTable />
      </div>
      <dic class="recipe-book--container__recipe"> Receta </dic>
    </div>
  </div>
</template>

<script setup>
import CKButton from "~/components/atoms/CKButton.vue";
import CKRecipeTable from "~/components/organisms/CKRecipeTable.vue";
</script>

<style lang="scss" scoped>
.recipe-book {
  &--title {
    @apply flex flex-row items-center justify-between;
  }
  &--container {
    @apply flex lg:flex-row flex-col-reverse lg:gap-0 gap-4;
    &__recipes {
      @apply lg:w-1/2 w-full;
      padding: 8px;
    }
    &__recipe {
      @apply lg:w-1/2 w-full;
      padding: 8px;
    }
  }
}
</style>
