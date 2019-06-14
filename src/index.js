import './styles.vue'
import VueCard from './components/VueCard.vue'
import VueButtonsLine from './components/VueButtonsLine.vue'
import VueInverse from './components/VueInverse.vue'
import VueConfigure from './components/VueConfigure.vue'
import VueFileArea from './components/VueFileArea.vue'
import VueDroppableZone from './components/VueDroppableZone.vue'

const version = '__VERSION__'

const install = (Vue) => {
  const components = [
    VueButtonsLine,
    VueCard,
    VueConfigure,
    VueInverse,
    VueFileArea,
    VueDroppableZone,
  ]
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
