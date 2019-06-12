<template>
  <div
    class="vue-ui-drop-zone"
    :class="{ 'vue-ui-drop-zone-base-overed': over }"
    @dragenter.prevent="dragenter"
    @dragover.prevent
    @dragleave="dragleave"
    @drop.prevent="drop"
  >
    <slot> </slot>
  </div>
</template>

<script>
export default {
  name: 'VueDroppableZone',
  data: () => ({
    over: false,
  }),
  props: {},
  methods: {
    dragenter() {
      this.over = true
    },
    dragleave() {
      this.over = false
    },
    drop(e) {
      this.$emit('drop', e)
      this.over = false
    },
  },
}
</script>

<style scoped></style>
