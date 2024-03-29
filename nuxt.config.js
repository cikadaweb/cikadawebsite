export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'cikadaweb',
    htmlAttrs: {
      lang: 'ru',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap',
      },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    '@nuxtjs/style-resources',
    '@nuxt/typescript-build',
    '@nuxtjs/composition-api/module',
    '@nuxtjs/fontawesome',
  ],

  styleResources: {
    scss: [
      '@/assets/scss/style.scss', // Путь к вашему файлу стилей
    ],
  },

  fontawesome: {
    component: 'fa',
    icons: {
      solid: [
        'faHouse',
        'faRightToBracket',
        'faPenToSquare',
        'faFileArrowDown',
        'faClock',
        'faChevronLeft',
        'faEye',
        'faReplyAll',
        'faChartPie',
        'faRectangleList',
        'faUsers',
        'faArrowRightFromBracket',
      ],
      brands: true,
    },
  },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: '/',
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
}
