export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'SmartRelax',
    htmlAttrs: {
      lang: 'de',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Terminvergaben waren noch nie so einfach! - Erweitern Sie mit uns Ihre Erreichbarkeit und schaffen Sie ein einfaches und unkompliziertes Prozedere' },
      { name: 'format-detection', content: 'telephone=no' },
      {
        name: 'author',
        content: 'SmartRelax'
      },
      {
        name: 'copyright',
        content: 'SmartRelax'
      },
      {
        name: 'robots',
        content: 'index,follow'
      },
      {
        hid: 'description',
        name: 'description',
        content:
          'Terminvergaben waren noch nie so einfach! - Erweitern Sie mit uns Ihre Erreichbarkeit und schaffen Sie ein einfaches und unkompliziertes Prozedere',
      },
      {
        hid: 'og:image',
        property: 'og:image',
        content: '/thumb.png',
      },
      {
        hid: 'og:title',
        name: 'og:title',
        content: 'SmartRelax',
      },
      {
        name: 'og:site_name',
        content: 'SmartRelax',
      },
      {
        prefix: 'og: https://ogp.me/ns#',
      },
      {
        hid: 'og:description',
        name: 'og:description',
        content:
          'Terminvergaben waren noch nie so einfach! - Erweitern Sie mit uns Ihre Erreichbarkeit und schaffen Sie ein einfaches und unkompliziertes Prozedere',
      },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [{ src: '~/assets/scss/main.scss', lang: 'scss' }],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    'bootstrap-vue/nuxt',
    [
      'nuxt-social-meta',
      {
        url: '',
        title: 'SmartRelax',
        site_name: 'SmartRelax',
        description:
          'Terminvergaben waren noch nie so einfach! - Erweitern Sie mit uns Ihre Erreichbarkeit und schaffen Sie ein einfaches und unkompliziertes Prozedere',
        img: 'thumb.png',
        img_size: { width: '800px', height: '600px' },
        locale: 'de_DE',
        twitter_card: 'SmartRelax',
        theme_color: '#ffffff',
      },
    ],
    '@nuxtjs/sitemap'
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},

  target: 'static'
}
