const axios = require('axios')

module.exports = {
  head: {
    titleTemplate: '%s - Blog',
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
  css: [
    { src: '@/assets/global.sass', lang: 'sass' },
  ],
  router: {
    base: '/'
    // base: '/simple-blog-with-nuxt/'
  },
  modules: [
    '@nuxtjs/moment',
  ],
  plugins: ['~plugins/filters.js'],
  generate: {
    routes() {
      return axios.get('https://jsonplaceholder.typicode.com/posts')
        .then((res) => {
          var rts = []
          res.data.forEach((d) => {
            rts.push('/article/' + d.id)
          })
          return rts
        })
    }
  },
  build: {
    vendor: [
      'axios'
    ]
  }
}