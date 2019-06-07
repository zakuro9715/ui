require('@vue/ui/dist/vue-ui.css')
const VueUi = require('@vue/ui')

const version = '__VERSION__'

const install = (Vue) => {
  Vue.use(VueUi)

  const modules = require.context('./components', true, /^.*\.vue$/)
  const nameReg = /(\w+)\.vue/
  modules.keys().forEach((key) => {
    const name = key.match(nameReg)[1]
    const module = modules(key)
    Vue.component(name, module.default)
  })
}

const plugin = {
  install,
  version,
}

export default plugin

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(plugin)
}
