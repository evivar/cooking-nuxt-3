<template>
  <button class="btn ck-button">
    <slot name="icon"></slot>
    <slot></slot>
  </button>
</template>

<script setup>
</script>

<style lang="scss" scoped>
.ck-button {
  @apply lg:text-base text-xs;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 4px;
}
</style>