<template>
  <div :class="hostClass">
    <slot />
  </div>
</template>

<script>
import ToggleMixin from '../mixins/ToggleMixin'

export default {
  name: 'VueInverse',
  props: {
    value: {
      type: Boolean,
      default: true,
    },
  },
  mixins: [ToggleMixin],
  computed: {
    hostClass() {
      return {
        'vue-ui-inverse': this.toggleOn,
        'vue-ui-noinverse': this.toggleOff,
      }
    },
  },
}
</script>

<style>
.vue-ui-dark-mode .vue-ui-noinverse {
  background-color: var(--vue-ui-color-dark);
}

.vue-ui-dark-mode .vue-ui-inverse {
  background-color: var(--vue-ui-color-dark-neutral);
}

.vue-ui-noinverse {
  background-color: var(--vue-ui-color-light);
}

.vue-ui-inverse {
  background-color: var(--vue-ui-color-light-neutral);
}
</style>
