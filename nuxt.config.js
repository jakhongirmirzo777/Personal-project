import { i18N } from "./configurations/i18n";
export default {
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'personal',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [{ src: "@/assets/scss/main.scss", lang: "scss" }],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: ["@/plugins/vee-validate/vee-validate.js",],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    '@nuxtjs/google-fonts',
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    ['nuxt-i18n',  i18N]
  ],

  // Axios module configuration (https://go.nuxtjs.dev/config-axios)
  axios: {},

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
    transpile: ["vee-validate/dist/rules"]
  },

  googleFonts: {
    families: {
      "Lato": {
        wght: [100, 300, 400]
      },
      "Open Sans" : {
        wght: [300, 400, 600]
      },
      "Pompiere": {
        wght: [400]
      },
      "Roboto": {
        wght: [100, 300, 400, 500]
      },
      "Sacramento": {
        wght: [400]
      },
      "Ubuntu": {
        wght: [300, 400, 500]
      },
}
}
}
