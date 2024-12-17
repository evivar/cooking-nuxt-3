<template>
  <div class="new-recipe card">
    <span class="title"> {{ newRecipe.title ? newRecipe.title : "Nueva receta" }} </span>
    <div class="new-recipe--content">
      <div class="new-recipe--content__form">
        <CKInput placeholder="Nombre de la receta" v-model="newRecipe.title" />
        <hr class="separator" />
        <div class="ingredients--title">
          <span>Ingredientes</span>
        </div>
        <CKInput
          v-for="(ingredient, idx) in newRecipe.ingredients"
          :key="idx"
          placeholder="Ingrediente"
          v-model="newRecipe.ingredients[idx]"
        />
        <div class="flex justify-end">
          <CKButton @click="onAddIngredientClick">
            <template #icon>
              <i class="material-symbols-outlined">add</i>
            </template>
            Añadir ingrediente
          </CKButton>
        </div>
        <hr class="separator" />
        <CKTextarea placeholder="Pasos" v-model="newRecipe.steps" />
      </div>
      <!-- <div class="new-recipe--content__image">
        <img src="@/assets/images/default-recipe-image.svg" alt="default-recipe" />
      </div> -->
      <CKButton @click="onSaveRecipeClick">
        <template #icon>
          <i class="material-symbols-outlined">save</i>
        </template>
        Guardar receta
      </CKButton>
    </div>
  </div>
</template>

<script setup>
import CKButton from "~/components/atoms/CKButton.vue";
import CKTextarea from "@/components/atoms/CKTextarea.vue";
import CKInput from "~/components/atoms/CKInput.vue";

const router = useRouter();

const recipeStore = useRecipeStore();

const newRecipe = reactive({
  title: null,
  ingredients: [null, null, null],
  steps: null,
});

const onAddIngredientClick = () => {
  newRecipe.ingredients.push(null);
};

const onSaveRecipeClick = async () => {
  const fields = {
    title: newRecipe.title,
    ingredients: newRecipe.ingredients.toString(),
    steps: newRecipe.steps,
  };
  console.log("fields :>> ", fields);
  const response = await $fetch("/api/add-recipe", {
    method: "POST",
    body: {
      fields: fields,
    }
  });
  console.log('response :>> ', response);
  if(response.id){
    router.push('/recipe-book');
  }
};
</script>

<style lang="scss" scoped>
.new-recipe {
  @apply flex flex-col items-center justify-center gap-4;
  padding: 24px;
  & > .title {
    @apply lg:text-lg text-sm font-semibold;
  }
  &--content {
    @apply grid grid-cols-1 gap-4 lg:w-[50%] w-full;
    &__form {
      @apply flex flex-col gap-4;
      & > .ingredients--title {
        @apply flex flex-row items-center justify-between;
      }
    }
  }
}
</style>
