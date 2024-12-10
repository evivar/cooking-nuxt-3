<template>
  <div class="card ck-recipe-card">
    <div class="ck-recipe-card--icon-container">
      <i class="material-symbols-outlined ck-recipe-card--icon-container__icon"
        >book</i
      >
      <i
        class="material-symbols-outlined ck-recipe-card--icon-container__icon-shadow"
        >book</i
      >
    </div>
    <div class="ck-recipe-card--info">
      <span class="ck-recipe-card--info__title">{{ recipeTitle }}</span>
      <span class="ck-recipe-card--info__subtitle">{{ recipeDate }}</span>
    </div>
  </div>
</template>

<script setup>
defineProps({
  recipeTitle: {
    type: String,
    default: "Título de la receta",
  },
  recipeDate: {
    type: String,
    default: "Fecha de la receta",
  },
});
</script>

<style lang="scss" scoped>
.ck-recipe-card {
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: center;
  padding: 12px;
  gap: 8px;
  border: 1px solid #12b488;
  border-radius: 5px;
  &--icon-container {
    position: relative;
    &__icon {
      width: 48px;
      height: 48px;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    &__icon-shadow {
      position: absolute;
      right: 9px;
      top: 9px;
      opacity: 0.25;
    }
  }
  &--info {
    display: flex;
    flex-direction: column;
    &__title {
      @apply font-semibold;
    }
    &__subtitle {
      @apply text-xs text-gray-500;
    }
  }
}
</style>