<template>
  <div class="mt-7 max-w-sm mx-auto text-center p-4 card">
    <p class="mt-7 text-7xl fon-bold">
      {{ error.statusCode }}
    </p>
    <p class="mt-6 text-6xl">Ooops.</p>
    <p class="mt-6">
      {{ error.message }}
    </p>
    <button @click="handleClearError" class="btn flex my-7 mx-auto items-center">
      <i class="material-symbols-outlined mr-2">home</i>
      <span>Volver al inicio</span>
    </button>
  </div>
</template>

<script setup>
defineProps(["error"]);

const handleClearError = () => {
  clearError({ redirect: "/" });
};
</script>

<style lang="scss" scoped></style>
