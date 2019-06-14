<template>
  <div>
    <slot />
  </div>
</template>

<script>

class Choices {
  constructor(vm) {
    this.vm = vm
    this.ids = {}
    this.multiple = vm.multiple
  }

  emitInput() {
    const actives = Object.keys(this.ids).filter((id) => this.isActive(id))
    if (this.multiple) {
      this.vm.$emit('input', actives)
    } else {
      this.vm.$emit('input', actives.length > 0 ? actives[0] : null)
    }
  }

  add(id) {
    this.ids = { [id]: false, ...this.ids }
  }

  isActive(id) {
    return !!this.ids[id]
  }

  reset(ids) {
    Object.keys(this.ids).forEach((id) => {
      this.ids[id] = ids[id] || false
    })
  }

  activate(...ids) {
    if (ids.length === 0) {
      return
    }

    if (this.multiple) {
      ids.forEach((id) => {
        this.ids[id] = true
      })
    } else {
      const id = ids[0]
      this.reset({ [id]: id }, )
    }
    this.emitInput()
  }

  deactivate(...ids) {
    if (ids.length === 0) {
      return
    }

    ids.forEach((id) => {
      this.ids[id] = false
    })
    this.emitInput()
  }

  toggle(...ids) {
    if (ids.length === 0) {
      return
    }

    ids.forEach((id) => {
      if (this.isActive(id)) {
        this.deactivate(id)
      } else {
        this.activate(id)
      }
    })
  }


}

export default {
  name: 'VueChoiceGroup',
  props: {
    multiple: {
      type: Boolean,
      default: false,
    },
    value: {
      type: [String, Array],
    },
  },
  data: (vm) => ({
    choices: new Choices(vm),
  }),
  mounted() {
    this.choices.reset(this.idsFromValue)
  },
  computed: {
    idsFromValue() {
      console.log(this.value)
      if (!this.value || this.value.length === 0) {
        return {}
      }
      const list = Array.isArray(this.value) ? this.value : [this.value]
      const obj = {}
      list.forEach((id) => obj[id] = true)
      return obj
    }
  },
  watch: {
    idsFromValue(ids) {
      this.choices.reset(ids)
    },
  },
  provide() {
    const context = {}
    Object.defineProperty(context, 'choices', {
      enumerable: true,
      get: () => this.choices,
    })


    return {
      context
    }
  }
}
</script>


