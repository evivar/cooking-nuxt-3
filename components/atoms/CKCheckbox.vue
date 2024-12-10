<template>
  <div class="ck-checkbox">
    <input
      class="input"
      id="checkbox"
      type="checkbox"
      name="checkbox"
      :checked="modelValue"
      @input="$emit('update:modelValue', $event.target.checked)"
    />
    <label class="label" :class="{ purchased: modelValue }" for="checkbox">{{
      label
    }}</label>
  </div>
</template>

<script setup>
defineProps({
  label: {
    type: String,
    default: "",
  },
  modelValue: {
    type: Boolean,
    default: false,
  },
});
</script>

<style lang="scss" scoped>
.ck-checkbox {
  display: grid;
  grid-template-columns: 24px auto;
  gap: 10px;
  align-items: center;
  & > .label {
    @apply lg:text-base text-sm;
    color: black;
    display: flex;
    align-items: center;
    gap: 10px;
    line-height: 1.5;
    white-space: normal;
    margin-top: 4px;
  }
  & > .input {
    @apply shadow-md;
    width: 24px;
    height: 24px;
    border-radius: 5px;
    border: 1px solid #12b488;
    appearance: none;
    outline: none;
    cursor: pointer;
    position: relative;
    margin-top: 4px;

    &:checked {
      background-color: #12b488;
      &::after {
        content: "";
        position: absolute;
        top: 4px;
        left: 8px;
        width: 5px;
        height: 13px;
        border: solid white;
        border-width: 0 2px 2px 0;
        transform: rotate(45deg);
      }
    }
  }
}

.purchased {
  text-decoration: line-through;
}
</style>
