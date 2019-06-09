<template>
  <div :class="hostClass">
    <slot />
  </div>
</template>

<script>
export default {
  name: 'VueInverse',
  props: {
    value: {
      type: Boolean,
      default: true,
    },
  },
  computed: {
    hostClass() {
      return {
        'vue-ui-inverse': this.resolved,
        'vue-ui-noinverse': !this.resolved,
      }
    },
    resolved() {
      return this.value ^ this.currentInverse
    },
  },
  provide() {
    return {
      currentInverse: this.resolved,
    }
  },
  inject: {
    currentInverse: { default: false },
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
