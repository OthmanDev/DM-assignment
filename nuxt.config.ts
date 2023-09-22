// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      title: 'DM',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          hid: 'description',
          name: 'description',
          content: 'DM',
        },
        {
          property: 'image',
          content: 'http://localhost:3000/_nuxt/assets/icons/logo.svg',
        },
        {
          property: 'og:title',
          content: 'DM',
        },
        {
          property: 'og:description',
          content: 'DM',
        },
        {
          property: 'og:type',
          content: 'website',
        },
        {
          property: 'og:url',
          content: 'http://localhost:3000/',
        },
        {
          property: 'twitter:card',
          content: 'summary_large_image',
        },
        {
          property: 'twitter:url',
          content: 'http://localhost:3000/',
        },
        {
          property: 'twitter:title',
          content: 'DM',
        },
        {
          property: 'twitter:description',
          content: 'DM',
        },
        {
          property: 'twitter:image',
          content: 'http://localhost:3000/_nuxt/assets/icons/logo.svg',
        },
        {
          property: 'og:image',
          content: 'http://localhost:3000/_nuxt/assets/icons/logo.svg',
        },
        { name: 'format-detection', content: 'telephone=no' },
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap' }
      ]
    },
  },
  modules: ['@nuxtjs/tailwindcss', '@pinia/nuxt'],
  css: ['~/assets/css/app.css'],
  tailwindcss: {
    cssPath: '~/assets/css/app.css',
    configPath: 'tailwind.config.js'
  }
})
