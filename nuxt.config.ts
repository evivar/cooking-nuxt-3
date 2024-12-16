// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss", "@nuxtjs/i18n", "@pinia/nuxt"],
  app: {
    head: {
      title: "Cooking Nuxt | Recipe book & shopping list",
      meta: [
        {
          name: "description",
          content:
            "Recipe book and shopping list made with Vue 3 and Nuxt 3 using AirTable API",
        },
      ],
      link: [
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined",
        },
      ],
    },
  },
  runtimeConfig: {
    airTableKey: process.env.AIR_TABLE_API_KEY,
  },
});
