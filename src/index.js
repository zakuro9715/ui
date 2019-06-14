import './styles.vue'
import VueCard from './components/VueCard.vue'
import VueButton from './components/VueButton.vue'
import VueButtonsLine from './components/VueButtonsLine.vue'
import VueChoiceGroup from './components/VueChoiceGroup.vue'
import VueChoiceButton from './components/VueChoiceButton.vue'
import VueInverse from './components/VueInverse.vue'
import VueConfigure from './components/VueConfigure.vue'
import VueFileArea from './components/VueFileArea.vue'
import VueDroppableZone from './components/VueDroppableZone.vue'

const version = '__VERSION__'

const install = (Vue) => {
  const components = [
    VueButton,
    VueButtonsLine,
    VueChoiceGroup,
    VueChoiceButton,
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
