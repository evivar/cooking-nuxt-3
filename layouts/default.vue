<template>
    <div>
      <header class="shadow-sm bg-white">
        <nav class="container mx-auto p-4 flex justify-between">
          <nuxt-link to="/" class="font-bold">Cooking Nuxt 3</nuxt-link>
          <ul class="flex gap-4">
            <li>
              <nuxt-link to="/">Inicio</nuxt-link>
            </li>
            <li>
              <nuxt-link to="/recipe-book">Libro de recetas</nuxt-link>
            </li>
          </ul>
        </nav>
      </header>
      <div class="container mx-auto p-4">
        <slot />
      </div>
    </div>
  </template>
  
  <script setup></script>
  
  <style lang="scss" scoped>
  .router-link-exact-active {
      color: #12b488;
  }
  </style>
  