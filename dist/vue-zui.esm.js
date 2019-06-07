/*!
 * vue-zui v0.1.0 
 * (c) 2019 
 * Released under the undefined License.
 */
require('@vue/ui/dist/vue-ui.css');

var VueUi = require('@vue/ui');

var version = '0.1.0';

var install = function install(Vue) {
  /*
   * NOTE:
   *   if you need to extend Vue contstructor, you can extend it in here.
   */
  Vue.prototype.$add = function (a, b) {
    return a + b;
  };

  Vue.use(VueUi);
  /*
   * NOTE:
   *  somthing implementation here ...
   */
};

var plugin = {
  install: install,
  version: version
};

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(plugin);
}

export default plugin;
