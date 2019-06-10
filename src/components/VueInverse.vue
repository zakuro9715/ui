<template>
  <div :class="hostClass">
    <slot />
  </div>
</template>

<script>
import VueInverseMixin from '../mixins/VueInverseMixin'
export default {
  name: 'VueInverse',
  mixins: [VueInverseMixin],
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
