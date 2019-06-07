module.exports = {
  plugins: [
    require('./plugin.js')
  ],
  locales: {
    '/': {
      lang: 'en-US',
      title: 'VueZui',
      description: 'VueZui for Vue.js'
    }
  },
  themeConfig: {
    repo: '/vue-zui',
    docsDir: 'docs',
    locales: {
      '/': {
        label: 'English',
        selectText: 'Languages',
        editLinkText: 'Edit this page on GitHub',
        nav: [{
          text: 'Release Notes',
          link: 'https://github.com//vue-zui/releases'
        }],
        sidebar: [
          '/installation.md',
          '/started.md',
        ]
      }
    }
  }
}
