<template>
  <component :is="component" class="vue-ui-button">
    <slot :label=label :value="value">
      {{ label }}
    </slot>
  </component>
</template>
<script>
export default {
  name: 'VueButton',
  props: {
    tag: {
      type: String,
      default: null,
    },
    label: {
      type: String,
      default: '',
    },
    value: {
      type: null,
      default: null,
    },
    type: {
      type: String,
      default: null,
    }
  },
  computed: {
    component() {
      if (this.tag) {
        return this.tag
      }

      if (this.$attrs.to) {
        return 'router-link'
      } else if (this.$attrs.href) {
        return 'a'
      }
      return 'button'
    },
  },
}
</script>

<style scoped>
.vue-ui-button {
  display: inline-block;
  height: var(--vue-ui-button-height);
  padding: var(--vue-ui-button-padding);
}
</style>
