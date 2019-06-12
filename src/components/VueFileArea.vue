<template>
  <VueDroppableZone @drop="drop" class="vue-ui-file-area">
    <input
      type="file"
      ref="input"
      :accept="accept"
      @change="inputChange"
      class="input-tag"
    />
    <VueButton @click="openDialog">open file</VueButton>
  </VueDroppableZone>
</template>

<script>
export default {
  name: 'VueFileArea',
  props: {
    accept: {
      type: String,
      default: '',
    },
  },
  data: () => ({
    overlay: false,
  }),
  methods: {
    acceptable(file) {
      if (this.accept === '') {
        return true
      }
      return this.accept.split(',').some((specifier) => {
        if (specifier[0] === '.') {
          return file.name.endsWith(file.name)
        }
        if (specifier === file.type) {
          return true
        }
        return ['audio/', 'video/', 'image/'].some(
          (g) =>
            specifier.startsWith(g) &&
            specifier.endsWith('*') &&
            file.type.startsWith(g)
        )
      })
    },
    openDialog(e) {
      this.$refs.input.click(e)
    },
    inputChange(e) {
      this.changeFiles(e.target.files)
    },
    changeFiles(files) {
      const vm = this
      const filtered = Array.prototype.filter.call(files, (f) =>
        vm.acceptable(f)
      )
      this.$emit('change', { files: filtered })
    },
    drop(e) {
      const files = e.dataTransfer.files || []
      this.changeFiles(files)
    },
  },
}
</script>

<style scoped>
.input-tag {
  display: none;
}

.vue-ui-file-area {
  border: dashed 1px;
  border-radius: var(--vue-ui-border-radius);
  padding: var(--vue-ui-file-area-padding);
}
</style>
