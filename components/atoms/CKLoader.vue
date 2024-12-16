<template>
  <i class="material-symbols-outlined loading-icon">progress_activity</i>
</template>

<script setup></script>

<style lang="scss" scoped>
.loading-icon {
    color: whtie;
    animation: spin 2s linear infinite;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
</style>
