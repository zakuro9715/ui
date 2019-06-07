require('@vue/ui/dist/vue-ui.css')
const VueUi = require('@vue/ui')
const version = '__VERSION__'

const install = Vue => {
  /*
   * NOTE:
   *   if you need to extend Vue contstructor, you can extend it in here.
   */

  Vue.prototype.$add = (a, b) => {
    return a + b
  }

  Vue.use(VueUi)

  /*
   * NOTE:
   *  somthing implementation here ...
   */
}

const plugin = {
  install,
  version
}

export default plugin

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(plugin)
}
