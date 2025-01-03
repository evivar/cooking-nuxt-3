<template>
  <textarea
    class="ck-textarea"
    :rows="rows"
    autocomplete="off"
    :value="modelValue"
    :type="type"
    :placeholder="placeholder"
    name="textarea"
    @input="$emit('update:modelValue', $event.target.value)"
  />
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
  rows: {
    type: Number,
    default: 8,
  },
});
</script>

<style lang="scss" scoped>
.ck-textarea {
  @apply w-full flex;
  border: 1px solid #12b488;
  border-radius: 10px;
  padding: 12px 20px;
  background: white;
  color: black;
  font-size: 14px;
  &:focus,
  &:focus-visible {
    border-color: #12b488;
    outline: none;
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
