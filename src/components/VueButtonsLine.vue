<template>
  <div class="vue-ui-buttons-line" :class="lineClass">
    <slot />
  </div>
</template>

<script>
function isEnabled(v) {
  return !(v === undefined || v === null || v === false)
}

export default {
  name: 'VueButtonsLine',
  props: {
    horizontal: {
      type: Boolean,
      default: () => false,
    },
    vertical: {
      type: Boolean,
      default: () => false,
    },
    stretch: {
      type: Boolean,
      default: () => false,
    },
  },
  computed: {
    flexDir() {
      return isEnabled(this.vertical) ? 'column' : 'row'
    },
    lineClass() {
      return {
        'vue-ui-buttons-line-row': this.flexDir === 'row',
        'vue-ui-buttons-line-column': this.flexDir === 'column',
        'vue-ui-buttons-line-stretch': isEnabled(this.stretch)
      }
    },
  },
}
</script>

<style>
.vue-ui-buttons-line {
  display: flex;
}

.vue-ui-buttons-line.vue-ui-buttons-line-stretch {
  align-items: stretch;
}

.vue-ui-buttons-line.vue-ui-buttons-line-stretch .vue-ui-button {
  flex-grow: 1;
}
.vue-ui-buttons-line-row {
  flex-direction: row;
  justify-content: center;
  align-items: center;
  align-content: center;
}

.vue-ui-buttons-line-column {
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-content: center;
}

.vue-ui-buttons-line .vue-ui-button:not(:first-child):not(last-child) {
  border-radius: 0;
}

.vue-ui-buttons-line-row .vue-ui-button:first-child {
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
}

.vue-ui-buttons-line-row .vue-ui-button:last-child {
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
}

.vue-ui-buttons-line-column .vue-ui-button:first-child {
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
}

.vue-ui-buttons-line-column .vue-ui-button:last-child {
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}
</style>
