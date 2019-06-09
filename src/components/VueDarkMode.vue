<template>
  <div :class="hostClass">
    <slot />
  </div>
</template>

<script>
import ToggleMixin from '../mixins/ToggleMixin'

export default {
  name: 'VueDarkMode',
  props: {
    value: {
      type: [Boolean, String],
      default: true,
    },
  },
  mixins: [ToggleMixin],
  computed: {
    hostClass() {
      return {
        'vue-ui-dark-mode': this.toggleOn,
        'vue-ui-light-mode': this.toggleOff,
      }
    },
  },
}
</script>

<style>
</style>
