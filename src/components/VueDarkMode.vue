<template>
  <div :class="hostClass">
    <slot />
  </div>
</template>

<script>
import VueInverseMixin from '../mixins/VueInverseMixin'
export default {
  name: 'VueDarkMode',
  mixins: [VueInverseMixin],
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
