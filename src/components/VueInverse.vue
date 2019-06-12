<template>
  <div :class="inverseClass">
    <slot />
  </div>
</template>

<script>
export default {
  name: 'VueInverse',
  props: {
    kind: {
      type: String,
      default: 'inverse',
    },
    value: {
      type: [Boolean, String],
      default: true,
    },
  },
  data() {
    const data = this.$_VueInverseMixin && this.$_VueInverseMixin.data || {}
    return {
      inverseData: Object.assign({}, data, { [this.kind]: !!data[this.kind] ^ !!this.value })
    }
  },
  provide() {
    return {
      $_VueInverseMixin: {
        data: this.inverseData,
      },
    }
  },
  inject: {
    $_VueInverseMixin: {
      default: null,
    },
  },
  computed: {
    resolvedInverse() {
      return this.inverseData[this.kind]
    },
    inverseClass() {
      return {
        [`vue-ui-${this.kind}`]: this.inverseData[this.kind],
        [`vue-ui-no-${this.kind}`]: !this.inverseData[this.kind],
      }
   },
  },
  watch: {
    value: function(newValue, oldValue) {
      if (newValue !== oldValue) {
        this.inverseData[this.kind] = !this.inverseData[this.kind]
      }
    },
  },
}
</script>

<style>
.vue-ui-dark-mode .vue-ui-no-inverse {
  background-color: var(--vue-ui-color-dark);
}

.vue-ui-dark-mode .vue-ui-inverse {
  background-color: var(--vue-ui-color-dark-neutral);
}

.vue-ui-no-inverse {
  background-color: var(--vue-ui-color-light);
}

.vue-ui-inverse {
  background-color: var(--vue-ui-color-light-neutral);
}
</style>
