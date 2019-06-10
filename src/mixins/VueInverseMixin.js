export default {
  props: {
    inverse: {
      type: [Boolean, String],
    },
  },
  data() {
    return {
      inverseData: {
        value: this.inverse,
      },
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
    $_resolved() {
      const selfValue = !!(this.inverseData && this.inverseData.value)
      const parentValue = !!(this.$_VueInverseMixin && this.$_VueInverseMixin.data.value)
      return !!(selfValue ^ parentValue)
    },
    hostClass() {
      return {
        'vue-ui-inverse': this.$_resolved,
        'vue-ui-noinverse': !this.$_resolved,
      }
    },
  },
  watch: {
    inverse(newValue, oldValue) {
      if (newValue !== oldValue) {
        this.inverseData.value = newValue
      }
    },
  },
}
