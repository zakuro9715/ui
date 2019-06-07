# Installation

## Direct Download / CDN

https://unpkg.com/vue-zui/dist/vue-zui 

[unpkg.com](https://unpkg.com) provides NPM-based CDN links. The above link will always point to the latest release on NPM. You can also use a specific version/tag via URLs like https://unpkg.com/vue-zui@{{ $version }}/dist/vue-zui.js
 
Include vue-zui after Vue and it will install itself automatically:

```html
<script src="https://unpkg.com/vue/dist/vue.js"></script>
<script src="https://unpkg.com/vue-zui/dist/vue-zui.js"></script>
```

## NPM

```sh
$ npm install vue-zui
```

## Yarn

```sh
$ yarn add vue-zui
```

When used with a module system, you must explicitly install the `vue-zui` via `Vue.use()`:

```javascript
import Vue from 'vue'
import vue-zui from 'vue-zui'

Vue.use(vue-zui)
```

You don't need to do this when using global script tags.

## Dev Build

You will have to clone directly from GitHub and build `vue-zui` yourself if
you want to use the latest dev build.

```sh
$ git clone https://github.com//vue-zui.git node_modules/vue-zui
$ cd node_modules/vue-zui
$ npm install
$ npm run build
```

