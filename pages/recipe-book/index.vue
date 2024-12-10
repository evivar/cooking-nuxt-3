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
  </div>
</template>

<script setup>
import CKButton from '~/components/atoms/CKButton.vue';
</script>

<style lang="scss" scoped>
.recipe-book{
    &--title{
        @apply flex flex-row items-center;
    }
}
</style>
