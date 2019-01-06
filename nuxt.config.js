const axios = require('axios')

module.exports = {
  head: {
    titleTemplate: 'Particip_IO | Edgeryders',
    meta: [{
        charset: 'utf8'
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1'
      },
      {
        hid: 'description',
        name: 'description',
        content: 'Meta description'
      }
    ],
    link: [{
      rel: 'icon',
      type: 'image/x-icon',
      href: '/favicon.ico'
    }],
    link: [{
      rel: 'stylesheet',
      href: 'https://fonts.googleapis.com/css?family=Exo+2:100,200,300,400,500|Open+Sans:100,200,400,600,700'
    }]
  },
  css: [{
    src: '@/assets/global.sass',
    lang: 'sass'
  }, ],
  router: {
    base: '/'
    // base: '/simple-blog-with-nuxt/'
  },
  modules: [
    '@nuxtjs/moment',
    [
      'nuxt-mq',
      {
        // Default breakpoint for SSR
        defaultBreakpoint: 'default',
        breakpoints: {
          sm: 450,
          md: 780,
          lg: Infinity
        }
      }
    ]
  ],
  plugins: [{
      src: '~/plugins/filters.js'
    },
    {
      ssr: false,
      src: '~/plugins/flickity-resize.js'
    },
    {
      src: '~/plugins/vue-scroll-reveal',
      ssr: false
    }, {
      src: '~/plugins/vue-flickity.js',
      ssr: false
    }
  ],
  build: {
    vendor: [
      'axios'
    ]
  }
}