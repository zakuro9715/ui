export default (key) => ({
  props: {
    [key]: {
      type: [Boolean, String],
      default: true,
    },
  },
  data() {
    const data = this.$_VueInverseMixin && this.$_VueInverseMixin.data || {}
    return {
      inverseData: Object.assign({}, data, { [key]: !!data[key] ^ !!this[key] })
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
      return this.inverseData[key]
    },
    inverseClass() {
      return {
        [`vue-ui-${key}`]: this.inverseData[key],
        [`vue-ui-no-${key}`]: !this.inverseData[key],
      }
   },
  },
  watch: {
    [key]: function(newValue, oldValue) {
      if (newValue !== oldValue) {
        this.inverseData[key] = !this.inverseData[key]
      }
    },
  },
})
