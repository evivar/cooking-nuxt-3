<template>
  <button class="btn ck-button">
    <slot v-if="!loading" name="icon"></slot>
    <slot v-if="!loading"></slot>
    <CKLoader v-else />
  </button>
</template>

<script setup>
import CKLoader from "./CKLoader.vue";

defineProps({
  loading: {
    type: Boolean,
    default: false,
  },
});
</script>

<style lang="scss" scoped>
.ck-button {
  @apply lg:text-base text-xs;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 4px;
  justify-content: center;
}
</style>
