const pkg = require('./package')

module.exports = {
  mode: 'universal',

  /*
  ** Headers of the page
  */
  head: {
    // title: pkg.name,
    title: 'NUXT BLOG',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Roboto'},
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  // loading: { color: 'orangered' },
  loading: false,
  loadingIndicator: {
    name: 'circle',
    color: 'orangered'
  },


  /*
  ** Global CSS
  */
  css: [
    '~assets/styles/main.css'
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '~plugins/core-components.js',
    '~plugins/date-filter.js'
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
    '@nuxtjs/axios'
  ],
  axios: {
    baseURL: process.env.BASE_URL || 'https://nuxt-project-9df94.firebaseio.com',
    credentials: false
  },

  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
      
    }
  },
  env: {
    baseUrl: process.env.BASE_URL || 'https://nuxt-project-9df94.firebaseio.com',
    fbApiKey: 'AIzaSyBY-qVGmJsAWRU7YpHEq-LnhrwdX3bl79o'
  },
  //rootDir: '/admin',
  // router: {
  //   //base: '/my-app/',
  //   extendRoutes(routes) {
  //     routes.push({
  //       path: '*',
  //       component: resolve(__direname, 'pages/index.vue')
  //     })
  //   },
  //   linkActiveClass: 'tetetete'
  // }
  //srcDir: 'client-app/'
  transition: {
    name: 'fade',
    mode: 'out-in'
  }
}
