<template>
  <div class="pro-venue-input" :class="{ error: isError }">
    <input
      autocomplete="off"
      :value="modelValue"
      :type="type"
      :placeholder="placeholder"
      name="input"
      @input="$emit('update:modelValue', $event.target.value)"
    />
    <slot name="icon"></slot>
  </div>
</template>

<script setup>
defineProps({
  type: {
    type: String,
    default: "text",
  },
  placeholder: {
    type: String,
    default: null,
  },
  modelValue: {
    type: String,
    default: "",
  },
  isError: {
    type: Boolean,
    default: false,
  },
});
</script>

<style lang="scss" scoped>
.pro-venue-input {
  @apply w-full flex;
  height: 43px;
  border: 1px solid #12b488;
  border-radius: 60px;
  padding: 12px 20px;
  background: white;
  color: black;
  font-size: 14px;
  & > input {
    @apply w-full;
    background: white;
    &:focus,
    &:focus-visible {
      border-color: #12b488;
      outline: none;
    }
  }
  &::placeholder {
  }
  &:focus,
  &:focus-visible {
    background: white;
    border-color: #12b488;
    outline: none;
  }
}
.error {
  @apply border-red-500;
}
</style>
