/*!
 * vue-zui v0.1.0 
 * (c) 2019 z@kuro
 * Released under the MIT License.
 */
'use strict';

require('@vue/ui/dist/vue-ui.css');

var path = require('path');

var VueUi = require('@vue/ui');

var version = '0.1.0';

var install = function install(Vue) {
  Vue.use(VueUi);

  var modules = require.context('./components', true, /^.*\.vue$/);

  var nameReg = /(\w+)\.vue/;
  modules.keys().forEach(function (key) {
    var name = key.match(nameReg)[1];
    var module = modules(key);
    Vue.component(name, module.default);
  });
};

var plugin = {
  install: install,
  version: version
};

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(plugin);
}

module.exports = plugin;
