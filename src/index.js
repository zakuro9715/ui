import VueUi from '@vue/ui'

import './styles.vue'
import VueCard from './components/VueCard.vue'
import VueButtonsLine from './components/VueButtonsLine.vue'
import VueDroppableZone from './components/VueDroppableZone.vue'

const version = '__VERSION__'

const install = (Vue) => {
  Vue.use(VueUi)

  const components = [VueButtonsLine, VueCard, VueDroppableZone]
  components.forEach((v) => {
    Vue.component(v.name, v)
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
