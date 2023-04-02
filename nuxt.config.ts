// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    "@nuxtjs/tailwindcss",
    "@nuxt/content",
    "@nuxt/image-edge",
    "@pinia/nuxt",
    "@pinia-plugin-persistedstate/nuxt",
  ],
  image: {
    cloudinary: {
      baseURL:
        "https://res.cloudinary.com/ddio9vlzi/image/upload/v1680370771/sciencegeek/",
    },
    css: ["~/assets/css/main.css"],
    postcss: {
      plugins: {
        tailwindcss: {},
        autoprefixer: {},
      },
    },
  },
});
