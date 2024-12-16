<template>
  <div class="view-recipe">
    <div class="view-recipe--title">
      <span>
        {{ recipe?.title ? recipe.title : "Titulo" }}
      </span>
      <div class="view-recipe--image">
        <img src="@/assets/images/default-recipe-image.svg" alt="Receta" />
      </div>
    </div>
    <div class="view-recipe--ingredients">
      <span>Ingredientes</span>
      <div class="view-recipe--ingredients__list">
        <span
          class="ingredient"
          v-for="(ingredient, idx) in recipe?.ingredients"
          :key="idx"
        >
          {{ idx + 1 }}. {{ ingredient }}
        </span>
      </div>
    </div>
    <div class="view-recipe--steps">
      <span>Pasos</span>
      <p v-for="(step, idx) in recipe?.steps" :key="idx">{{ idx + 1 }}. {{ step }}</p>
    </div>
  </div>
</template>

<script setup>
defineProps({
  recipe: {
    type: Object,
    default: () => {},
  },
});

const getRecipeImageUrl = (recipe) => {
  if (recipe?.image) {
    return recipe.image;
  } else {
    return "require('@/assets/images/default-recipe-image.svg')";
  }
};
</script>

<style lang="scss" scoped>
.view-recipe {
  @apply flex flex-col w-full;
  max-height: calc(100vh - 88px);
  width: 100%;
  &--title {
    @apply lg:text-xl text-base font-semibold flex flex-row justify-between w-full;
    
  }
  &--image > img{
        border-radius: 5px;
    }
  &--ingredients {
    @apply flex flex-col flex-wrap w-full;
    & > span {
      @apply lg:text-base text-sm font-semibold;
    }
    &__list {
      @apply grid grid-cols-2 gap-2 mt-4;
    }
  }
  &--steps {
    @apply flex flex-col flex-wrap w-full mt-4;
    & > span {
      @apply lg:text-base text-sm font-semibold mb-4;
    }
  }
}
</style>
