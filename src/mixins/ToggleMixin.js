export default {
  props: {
    value: {
      type: Boolean,
      default: true,
    },
  },
  computed: {
    $_resolved() {
      return this.value ^ this.$_parentOnOff
    },
    toggleOn() {
      return this.$_resolved
    },
    toggleOff() {
      return !this.toggleOn
    },
  },
  provide() {
    return {
      $_parentOnOff: this.toggleOn,
    }
  },
  inject: {
    $_parentOnOff: { default: false },
  },
  watch: {
    inverse(v) {
      this.$emit('input', v)
    },
  },
}
