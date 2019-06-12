<template>
  <VueInverse kind="dark-mode" :value="darkMode">
    <VueInverse :value="inverse">
      <slot />
    </VueInverse>
  </VueInverse>
</template>

<script>
export default {
  name: 'VueConfigure',
  props: {
    darkMode: {
      type: [Boolean, String],
      default: false,
    },
    inverse: {
      type: [Boolean, String],
      default: false,
    },
  },
}
</script>
